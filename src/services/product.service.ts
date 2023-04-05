import { badRequestError, conflictError, notFoundError } from "@/errors";
import { productRepository } from "@/repositories";
import { CreateProduct, Product } from "@/types";
import { WithId } from "mongodb";

async function getAllProducts(): Promise<WithId<Product>[]> {
  return productRepository.findAllProducts();
}

async function getProductById(id: string): Promise<WithId<Product>> {
  const product = await productRepository.findProductById(id);

  if (!product) throw notFoundError();

  return product;
}

async function createProduct(newProduct: CreateProduct): Promise<void> {
  const product = await productRepository.findProductByName(newProduct.name);

  if (product) throw conflictError();

  await productRepository.insertProduct(newProduct);
}

async function searchProductsByQueryParam(
  searchParam: string,
): Promise<WithId<Product>[]> {
  validateQueryParam(searchParam);

  const products = await productRepository.searchProductsByQueryParam(
    searchParam,
  );

  return products;
}

function validateQueryParam(query: string): void {
  if (!query) throw badRequestError();
}

export const productService = {
  getAllProducts,
  getProductById,
  createProduct,
  searchProductsByQueryParam,
};
