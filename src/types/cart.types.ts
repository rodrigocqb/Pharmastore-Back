import { ObjectId } from "mongodb";
import { Product } from "./product.types";

export type CartItem = {
  _id: ObjectId;
  user_identifier: string;
  product: Product;
};

export type CreateCartItem = Omit<CartItem, "_id">;
