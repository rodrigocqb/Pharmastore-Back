import { conflictError } from "@/errors";
import { productRepository } from "@/repositories";
import { CreateProduct, Product } from "@/types";
import { WithId } from "mongodb";

async function getAllProducts(): Promise<WithId<Product>[]> {
  return productRepository.findAllProducts();
}

async function createProduct(newProduct: CreateProduct): Promise<void> {
  const product = await productRepository.findProductByName(newProduct.name);

  if (product) throw conflictError();

  await productRepository.insertProduct(newProduct);
}

export const productService = { getAllProducts, createProduct };
