import { productRepository } from "@/repositories";
import { productService } from "@/services";
import { jest } from "@jest/globals";
import { ObjectId } from "mongodb";

describe("getProductById testing suite", () => {
  it("should throw error if product does not exist", async () => {
    jest
      .spyOn(productRepository, "findProductById")
      .mockResolvedValueOnce(undefined);

    const promise = productService.getProductById("aaa");

    expect(promise).rejects.toEqual({
      name: "NotFoundError",
      message: "No result for this search!",
    });
  });

  it("should return product if it exists", async () => {
    const product = {
      name: "aaa",
      price: 10,
      image: "aaa",
      _id: new ObjectId("507f1f77bcf86cd799439011"),
      category: {
        name: "aaa",
        _id: new ObjectId("507f1f77bcf86cd799439011"),
      },
    };

    jest
      .spyOn(productRepository, "findProductById")
      .mockResolvedValueOnce(product);

    const promise = productService.getProductById("507f1f77bcf86cd799439011");

    expect(promise).resolves.toEqual(product);
  });
});

describe("searchProductsByQueryParam testing suite", () => {
  it("should throw error if user does not pass any params", async () => {
    const promise = productService.searchProductsByQueryParam("");

    expect(promise).rejects.toEqual({
      name: "BadRequestError",
      message: "Bad request!",
    });
  });

  it("should return array of products", async () => {
    jest
      .spyOn(productRepository, "searchProductsByQueryParam")
      .mockResolvedValueOnce([]);

    const promise = productService.searchProductsByQueryParam("a");

    expect(promise).resolves.toEqual([]);
  });
});
