import { productService } from "@/services";
import { CreateProduct, Product } from "@/types";
import { Request, Response } from "express";
import httpStatus from "http-status";
import { WithId } from "mongodb";

export async function getAllProducts(req: Request, res: Response) {
  const catalog: WithId<Product>[] = await productService.getAllProducts();
  
  return res.status(httpStatus.OK).send(catalog);
}

export async function postCreateProduct(req: Request, res: Response) {
  const newProduct = req.body as CreateProduct;

  await productService.createProduct(newProduct);

  return res.sendStatus(httpStatus.CREATED);
}
