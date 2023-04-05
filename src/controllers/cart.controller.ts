import { cartService } from "@/services";
import { CreateCartItem } from "@/types";
import { Request, Response } from "express";
import httpStatus from "http-status";

export async function postAddItemToCart(req: Request, res: Response) {
  const cartItem = req.body as CreateCartItem;

  await cartService.addItemToCart(cartItem);

  return res.sendStatus(httpStatus.OK);
}

export async function getUserCart(req: Request, res: Response) {
  const { user_identifier } = req.body;

  const cart = await cartService.getUserCart(user_identifier);

  return res.status(httpStatus.OK).send(cart);
}
