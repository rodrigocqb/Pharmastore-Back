import express, { json, Express } from "express";
import cors from "cors";
import { connectDb } from "@/config";

const app = express();

app.use(json()).use(cors());

export async function init(): Promise<Express> {
  await connectDb();
  return Promise.resolve(app);
}

export default app;
