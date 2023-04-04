import { ApplicationError } from "./application.error";

export function badRequestError(
  message: string | string[] = "Bad request!",
): ApplicationError {
  return {
    name: "BadRequestError",
    message,
  };
}
