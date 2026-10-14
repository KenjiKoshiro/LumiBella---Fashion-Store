const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const ts = require('typescript');

// Run the actual TypeScript logic using the project's existing compiler.
function load(relative) {
  const file = path.resolve(__dirname, '..', relative);
  const code = ts.transpileModule(fs.readFileSync(file, 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } }).outputText;
  const module = { exports: {} };
  new Function('module', 'exports', 'require', code)(module, module.exports, name => name.startsWith('@/') ? load(name.slice(2) + '.ts') : require(name));
  return module.exports;
}
const { parseRates, displayPrice, isCurrency, validCart, makeDemoReceipt, readDemoReceipt } = load('lib/demo.ts');
const { calculateShipping, calculateTax, calculateSubtotal } = load('lib/commerce.ts');
const item = { productId: '1', slug: 'dress', name: 'Dress', image: '/dress.svg', price: 100, size: 'M', quantity: 2 };
test('accepts only offered currencies', () => { assert.ok(isCurrency('THB')); assert.equal(isCurrency('XXX'), false); });
test('converts actual THB amount', () => assert.equal(displayPrice(100, 'USD', { THB: 1, USD: 0.03 }), 'USD\u00a03.00'));
test('missing currency rate falls back to THB', () => assert.equal(displayPrice(100, 'USD', { THB: 1 }), 'THB\u00a0100.00'));
test('nonfinite rate falls back safely', () => assert.equal(displayPrice(100, 'USD', { USD: Infinity }), 'THB\u00a0100.00'));
test('parses only valid THB rates and keeps oldest date', () => {
  const result = parseRates([{ base: 'THB', quote: 'USD', rate: .03, date: '2026-10-14' }, { base: 'THB', quote: 'EUR', rate: .025, date: '2026-10-13' }, { base: 'USD', quote: 'GBP', rate: 1, date: '2026-10-14' }]);
  assert.deepEqual(result, { rates: { THB: 1, USD: .03, EUR: .025 }, date: '2026-10-13' });
});
test('rejects invalid provider payloads', () => { for (const data of [null, {}, [], [{ base: 'THB', quote: 'USD', rate: -1, date: '2026-10-14' }]]) assert.throws(() => parseRates(data)); });
test('validates persisted cart', () => { assert.ok(validCart([item])); for (const value of [null, {}, [{ ...item, quantity: 0 }], [{ ...item, quantity: 100 }], [{ ...item, price: '100' }], [{ ...item, price: NaN }]]) assert.equal(validCart(value), false); });
test('demo checkout rejects an empty bag', () => assert.throws(() => makeDemoReceipt([], 'id', new Date().toISOString())));
test('demo receipt has correct total and explicitly identifies simulation', () => { const receipt = makeDemoReceipt([item], '123', '2026-10-15T00:00:00Z'); assert.equal(receipt.totalTHB, 200); assert.equal(receipt.demo, true); assert.equal(receipt.id, 'DEMO-123'); assert.notEqual(receipt.items[0], item); });
test('receipt roundtrip works without personal or payment data', () => { const receipt = makeDemoReceipt([item], '123', '2026-10-15T00:00:00Z'); assert.deepEqual(readDemoReceipt(JSON.stringify(receipt)), receipt); assert.deepEqual(Object.keys(receipt).sort(), ['createdAt', 'demo', 'id', 'items', 'totalTHB']); });
test('corrupt or forged receipt cannot display as confirmation', () => { assert.equal(readDemoReceipt('broken'), null); assert.equal(readDemoReceipt('{"order":"paid"}'), null); const receipt = makeDemoReceipt([item], '123', '2026-10-15T00:00:00Z'); receipt.totalTHB = 1; assert.equal(readDemoReceipt(JSON.stringify(receipt)), null); });
test('demo charges no shipping or tax', () => { assert.equal(calculateShipping(1000), 0); assert.equal(calculateTax(1000), 0); assert.equal(calculateSubtotal([item]), 200); });
