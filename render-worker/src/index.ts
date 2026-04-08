import "dotenv/config";
import express from "express";
import cors from "cors";
import cron from "node-cron";
import { createClient } from "@supabase/supabase-js";

const app = express();
app.use(cors());
app.use(express.json());

const supabase = createClient(
  process.env.SUPABASE_URL ?? "",
  process.env.SUPABASE_SERVICE_ROLE_KEY ?? ""
);

app.get("/health", async (_req, res) => {
  res.json({ ok: true, service: "lumibelle-worker" });
});

app.post("/jobs/order-confirmation", async (req, res) => {
  if (req.headers["x-render-key"] !== process.env.RENDER_INTERNAL_API_KEY) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const { orderId } = req.body as { orderId: string };
  return res.json({
    ok: true,
    message: `Render worker would send order email for ${orderId} and enqueue analytics events.`
  });
});

cron.schedule("0 * * * *", async () => {
  const { data: lowStockRows, error } = await supabase
    .from("inventory")
    .select("id, quantity_available, reorder_threshold, product_variant_id")
    .lte("quantity_available", 8);

  if (error) {
    console.error("Low stock job failed", error.message);
    return;
  }

  console.log(`[low-stock-job] ${lowStockRows?.length ?? 0} rows need attention.`);
});

const port = Number(process.env.PORT ?? 10000);
app.listen(port, () => {
  console.log(`LumiBelle worker listening on port ${port}`);
});
