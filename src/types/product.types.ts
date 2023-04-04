import { ObjectId } from "mongodb";
import { Category } from "./category.types";

export type Product = {
  _id: ObjectId;
  name: string;
  price: number;
  image: string;
  category: Category;
};

export type CreateProduct = Omit<Product, "_id">;
