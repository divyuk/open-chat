import { ErrorMap } from "@src/types";
import { z } from "zod";

export function validationErrors(error: Error): ErrorMap[] {
  let validationError: ErrorMap[] = [];
  if (error instanceof z.ZodError) {
    validationError = error.errors.map((err) => ({
      field: err.path.join("."),
      message: err.message,
    }));
  } else
    validationError.push({ field: "", message: "Something went Wrong! 😶" });

  return validationError;
}
