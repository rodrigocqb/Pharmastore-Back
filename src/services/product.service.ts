import { productRepository } from "@/repositories";
import { Product } from "@/types";
import { WithId } from "mongodb";

async function getAllProducts(): Promise<WithId<Product>[]> {
  return productRepository.findAllProducts();
}

export const productService = { getAllProducts };
