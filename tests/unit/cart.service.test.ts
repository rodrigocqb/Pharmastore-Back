import { productRepository } from "@/repositories";
import { cartService } from "@/services";
import { CreateCartItem } from "@/types";
import { jest } from "@jest/globals";
import { ObjectId } from "mongodb";

describe("addItemToCart testing suite", () => {
  it("should throw error if product does not exist", async () => {
    const cartItem: CreateCartItem = {
      user_identifier: "aa",
      product: {
        name: "aa",
        image: "aa",
        price: 10,
        _id: new ObjectId("507f1f77bcf86cd799439011"),
        category: {
          name: "aaa",
          _id: new ObjectId("507f1f77bcf86cd799439011"),
        },
      },
    };

    jest
      .spyOn(productRepository, "findProductByName")
      .mockResolvedValueOnce(undefined);

    const promise = cartService.addItemToCart(cartItem);

    expect(promise).rejects.toEqual({
      name: "NotFoundError",
      message: "No result for this search!",
    });
  });

  it("should add item to cart", async () => {
    const cartItem: CreateCartItem = {
      user_identifier: "aa",
      product: {
        name: "aa",
        image: "aa",
        price: 10,
        _id: new ObjectId("507f1f77bcf86cd799439011"),
        category: {
          name: "aaa",
          _id: new ObjectId("507f1f77bcf86cd799439011"),
        },
      },
    };

    jest
      .spyOn(productRepository, "findProductByName")
      .mockResolvedValueOnce(cartItem.product);

    const promise = cartService.addItemToCart(cartItem);

    expect(promise).resolves.toBeDefined();
  });
});
