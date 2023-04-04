import {
  getAllProducts,
  getProductsByQueryParam,
  postCreateProduct,
} from "@/controllers";
import { Router } from "express";

const productRouter = Router();

productRouter
  .get("/", getAllProducts)
  .get("/search", getProductsByQueryParam)
  .post("/", postCreateProduct);

export { productRouter };
