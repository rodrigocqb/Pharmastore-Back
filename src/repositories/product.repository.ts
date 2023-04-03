import { db } from "@/config";
import { Product } from "@/types";

async function findAllProducts() {
  const catalog = await db.collection<Product>("products").find({}).toArray();
  return catalog;
}

export const productRepository = { findAllProducts };
