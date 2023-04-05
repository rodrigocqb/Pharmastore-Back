import {
  deleteItemFromCart,
  getUserCart,
  postAddItemToCart,
} from "@/controllers";
import { Router } from "express";

const cartRouter = Router();

cartRouter
  .get("/", getUserCart)
  .post("/", postAddItemToCart)
  .delete("/", deleteItemFromCart);

export { cartRouter };
