import { productService } from "@/services";
import { Product } from "@/types";
import { Request, Response } from "express";
import httpStatus from "http-status";
import { WithId } from "mongodb";

export async function getAllProducts(req: Request, res: Response) {
  const catalog: WithId<Product>[] = await productService.getAllProducts();
  return res.status(httpStatus.OK).send(catalog);
}
