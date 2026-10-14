const fs = require('node:fs');
const ts = require('typescript');
const assert = require('node:assert/strict');
const { test } = require('node:test');
function catalog(legacy = false) {
  const photo = 'https://example.test/stored-dress.webp';
  const saved = { slug: 'dress', imageAuditStatus: 'broken', images: ['/placeholder.svg'], primaryImage: '/placeholder.svg' };
  const client = { from(table) {
    let selection;
    const query = { select(value) { selection = value; return this; }, eq() { return this; }, order() { return this; }, in() { return this; }, then(resolve, reject) {
      const result = table === 'categories' ? { data: [{ id: 'cat', slug: 'dresses', name: 'Dresses' }] }
        : table === 'product_images' ? { data: [{ product_id: 'p', storage_path: photo }] }
        : legacy && selection !== '*' ? { error: new Error('legacy schema') }
        : { data: [{ id: 'p', category_id: 'cat', slug: 'dress', name: 'Dress', price: 100, image_url: photo }] };
      return Promise.resolve(result).then(resolve, reject);
    }}; return query;
  }};
  const mocks = {
    react: { cache: fn => fn },
    '@/lib/supabase/server': { createSupabaseServerClient: () => client },
    '@/lib/supabase/config': { hasSupabaseConfig: () => true },
    '@/lib/supabase/storage': { getStoragePublicUrl: x => x },
    '@/lib/utils': { titleCase: x => x },
    '@/lib/mock-data': { products: [saved], categories: [], getProductBySlug: () => saved, getCategoryBySlug: () => null }
  };
  const code = ts.transpileModule(fs.readFileSync('lib/queries/products.ts', 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } }).outputText;
  const mod = { exports: {} }; new Function('module', 'exports', 'require', code)(mod, mod.exports, name => { if (!(name in mocks)) throw Error(name); return mocks[name]; });
  return { api: mod.exports, photo };
}
for (const legacy of [false, true]) test(`${legacy ? 'legacy' : 'modern'} catalog uses Supabase photos despite stale broken flags`, async () => {
  const { api, photo } = catalog(legacy); const [product] = await api.getAllProducts();
  assert.equal(product.primaryImage, photo); assert.deepEqual(product.images, [photo]);
});
