import { db } from "@/config";
import { Category, CreateCategory } from "@/types";

async function findAllCategories() {
  const categories = await db
    .collection<Category>("categories")
    .find({})
    .toArray();
  return categories;
}

async function insertCategory(name: string) {
  await db.collection<CreateCategory>("categories").insertOne({ name });
  return;
}

async function findCategoryByName(name: string) {
  return db.collection<Category>("categories").findOne({ name });
}

export const categoryRepository = {
  findAllCategories,
  insertCategory,
  findCategoryByName,
};
