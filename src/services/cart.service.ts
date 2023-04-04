import { notFoundError } from "@/errors";
import { cartRepository, productRepository } from "@/repositories";
import { CreateCartItem, Product } from "@/types";

async function addItemToCart(cartItem: CreateCartItem): Promise<void> {
  await checkIfItemExists(cartItem.product.name);

  await cartRepository.insertIntoCart(cartItem);
}

async function checkIfItemExists(productName: string): Promise<void> {
  const product = productRepository.findProductByName(productName);

  if (!product) throw notFoundError();
}

export const cartService = { addItemToCart };
