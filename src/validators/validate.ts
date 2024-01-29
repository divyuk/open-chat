import { registerUserSchema } from "@src/schema/userSchema";
import { validationErrors } from "@src/utils/schemaError";
import { Request, Response, NextFunction } from "express";
import { z } from "zod";

function createValidationMiddleware(
  schema: z.ZodObject<any, any, any> | z.ZodString
) {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse(req.body);
      next();
    } catch (error) {
      if (error instanceof Error) {
        const validationError = validationErrors(error);
        next(new ApiResponse(400, validationError));
      }
    }
  };
}
export const validateRegistration =
  createValidationMiddleware(registerUserSchema);
