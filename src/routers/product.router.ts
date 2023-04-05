import {
  getAllProducts,
  getProductById,
  getProductsByQueryParam,
  postCreateProduct,
} from "@/controllers";
import { Router } from "express";

const productRouter = Router();

productRouter
  .get("/", getAllProducts)
  .get("/product/:id", getProductById)
  .get("/search", getProductsByQueryParam)
  .post("/", postCreateProduct);

export { productRouter };
