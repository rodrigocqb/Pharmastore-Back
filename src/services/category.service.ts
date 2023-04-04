import { conflictError } from "@/errors";
import { categoryRepository } from "@/repositories";
import { Category } from "@/types";
import { WithId } from "mongodb";

async function getAllCategories(): Promise<WithId<Category>[]> {
  return categoryRepository.findAllCategories();
}

async function createCategory(name: string): Promise<void> {
  const category = await categoryRepository.findCategoryByName(name);

  if (category) throw conflictError();
}

export const categoryService = { getAllCategories };
