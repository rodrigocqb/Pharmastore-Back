import { db } from "@/config";
import { CreateProduct, Product } from "@/types";

async function findAllProducts() {
  const catalog = await db.collection<Product>("products").find({}).toArray();
  return catalog;
}

async function insertProduct(product: CreateProduct) {
  await db.collection<CreateProduct>("products").insertOne(product);
}

async function findProductByName(name: string) {
  return db.collection<Product>("products").findOne({ name });
}

export const productRepository = {
  findAllProducts,
  insertProduct,
  findProductByName,
};
