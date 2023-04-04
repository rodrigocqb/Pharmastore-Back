import { ApplicationError } from "./application.error";

export function conflictError(): ApplicationError {
  return {
    name: "ConflictError",
    message: "There was a conflict related to your request",
  };
}
