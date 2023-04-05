import { db } from "@/config";
import { CreateProduct, Product } from "@/types";
import { ObjectId } from "mongodb";

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

async function searchProductsByQueryParam(queryParam: string) {
  const products = await db
    .collection<Product>("products")
    .find({ $text: { $search: `\"${queryParam}\"`, $language: "en" } })
    .toArray();

  return products;
}

async function findProductById(id: string) {
  return db.collection<Product>("products").findOne({
    _id: new ObjectId(id),
  });
}

export const productRepository = {
  findAllProducts,
  insertProduct,
  findProductByName,
  searchProductsByQueryParam,
  findProductById,
};
