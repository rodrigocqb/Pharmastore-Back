import { db } from "@/config";
import { CartItem, CreateCartItem, DeleteItemParams } from "@/types";

async function insertIntoCart(cartItem: CreateCartItem) {
  return db.collection<CreateCartItem>("carts").insertOne(cartItem);
}

async function findUserCart(user_identifier: string) {
  return db.collection<CartItem>("carts").find({ user_identifier }).toArray();
}

async function deleteItemFromCart(deleteItemParams: DeleteItemParams) {
  return db.collection<CartItem>("carts").deleteOne({
    user_identifier: deleteItemParams.user_identifier,
    "product.name": deleteItemParams.productName,
  });
}

export const cartRepository = {
  insertIntoCart,
  findUserCart,
  deleteItemFromCart,
};
