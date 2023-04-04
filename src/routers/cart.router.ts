import { postAddItemToCart } from "@/controllers";
import { Router } from "express";

const cartRouter = Router();

cartRouter.post("/", postAddItemToCart);

export { cartRouter };
