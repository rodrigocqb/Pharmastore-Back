import { notFoundError } from "@/errors";
import { cartRepository, productRepository } from "@/repositories";
import { CartItem, CreateCartItem } from "@/types";
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

  if (cart.length === 0) throw notFoundError();

  return cart;
}

export const cartService = { addItemToCart, getUserCart };
