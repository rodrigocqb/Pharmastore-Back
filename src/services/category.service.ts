import { categoryRepository } from "@/repositories";
import { Category } from "@/types";
import { WithId } from "mongodb";

async function getAllCategories(): Promise<WithId<Category>[]> {
  return categoryRepository.findAllCategories();
}

export const categoryService = { getAllCategories };
