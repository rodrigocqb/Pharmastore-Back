import { db } from "@/config";
import { Category } from "@/types";

async function findAllCategories() {
  const categories = await db
    .collection<Category>("categories")
    .find({})
    .toArray();
  return categories;
}

export const categoryRepository = { findAllCategories };
