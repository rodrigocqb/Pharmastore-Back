import { getAllProducts, postCreateProduct } from "@/controllers";
import { Router } from "express";

const productRouter = Router();

productRouter.get("/", getAllProducts).post("/", postCreateProduct);

export { productRouter };
