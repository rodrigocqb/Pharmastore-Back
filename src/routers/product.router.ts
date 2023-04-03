import { getAllProducts } from "@/controllers";
import { Router } from "express";

const productRouter = Router();

productRouter.get("/", getAllProducts);

export { productRouter };
