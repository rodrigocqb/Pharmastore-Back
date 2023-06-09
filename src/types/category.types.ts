import { ObjectId } from "mongodb";

export type Category = {
  _id: ObjectId;
  name: string;
};

export type CreateCategory = {
  name: string;
};
