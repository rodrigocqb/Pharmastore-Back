import express, { json, Express } from "express";
import "express-async-errors";
import cors from "cors";
import { connectDb } from "@/config";
import { cartRouter, categoryRouter, productRouter } from "@/routers";
import { handleApplicationErrors } from "@/middlewares";

const app = express();

app
  .use(json())
  .use(cors())
  .use("/products", productRouter)
  .use("/categories", categoryRouter)
  .use("/carts", cartRouter)
  .use(handleApplicationErrors);

export async function init(): Promise<Express> {
  await connectDb();
  return Promise.resolve(app);
}

export default app;
