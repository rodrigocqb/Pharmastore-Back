import { categoryService } from "@/services";
import { Category, CreateCategory } from "@/types";
import { Request, Response } from "express";
import httpStatus from "http-status";
import { WithId } from "mongodb";

export async function getAllCategories(req: Request, res: Response) {
  const categories: WithId<Category>[] =
    await categoryService.getAllCategories();

  return res.status(httpStatus.OK).send(categories);
}

export async function postCreateCategory(req: Request, res: Response) {
  const { name } = req.body as CreateCategory;

  await categoryService.createCategory(name);

  return res.sendStatus(httpStatus.CREATED);
}
