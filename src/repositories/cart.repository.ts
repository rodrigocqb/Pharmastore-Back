import { db } from "@/config";
import { CartItem, CreateCartItem } from "@/types";

async function insertIntoCart(cartItem: CreateCartItem) {
  return db.collection<CreateCartItem>("carts").insertOne(cartItem);
}

async function findUserCart(user_identifier: string) {
  return db.collection<CartItem>("carts").find({ user_identifier }).toArray();
}

export const cartRepository = { insertIntoCart, findUserCart };
