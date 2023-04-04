import { db } from "@/config";
import { CreateCartItem } from "@/types";

async function insertIntoCart(cartItem: CreateCartItem) {
  return db.collection<CreateCartItem>("carts").insertOne(cartItem);
}

export const cartRepository = { insertIntoCart };
