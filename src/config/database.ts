import dotenv from "dotenv";
import { MongoClient } from "mongodb";

dotenv.config();

const mongoClient = new MongoClient(process.env.MONGO_URI);

export async function connectDb(): Promise<void> {
  try {
    await mongoClient.connect();
    /* eslint-disable-next-line no-console */
    console.log("MongoDB connected");
    await db
      .collection("products")
      .createIndex({ name: "text", "category.name": "text" });
  } catch (error) {
    /* eslint-disable-next-line no-console */
    console.log(error.message);
  }
}

export const db = mongoClient.db("pharmastore");
