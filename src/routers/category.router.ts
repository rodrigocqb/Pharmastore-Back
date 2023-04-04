import { getAllCategories, postCreateCategory } from "@/controllers";
import { Router } from "express";

const categoryRouter = Router();

categoryRouter.get("/", getAllCategories).post("/", postCreateCategory);

export { categoryRouter };
