import { notFoundError } from "@/errors";
import { cartRepository, productRepository } from "@/repositories";
import { CartItem, CreateCartItem, DeleteItemParams } from "@/types";
import { WithId } from "mongodb";

async function addItemToCart(cartItem: CreateCartItem): Promise<void> {
  await checkIfItemExists(cartItem.product.name);

  await cartRepository.insertIntoCart(cartItem);
}

async function checkIfItemExists(productName: string): Promise<void> {
  const product = productRepository.findProductByName(productName);

  if (!product) throw notFoundError();
}

async function getUserCart(
  user_identifier: string,
): Promise<WithId<CartItem>[]> {
  const cart = await cartRepository.findUserCart(user_identifier);

  return cart;
}

async function deleteItemFromCart(deleteItemParams: DeleteItemParams) {
  await cartRepository.deleteItemFromCart(deleteItemParams);
}

export const cartService = { addItemToCart, getUserCart, deleteItemFromCart };
