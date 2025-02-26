import { Request, Response } from "express";
import { registerSchema, loginSchema } from "../validators/auth.validator";
import { loginUser, registerUser } from "../service/auth.service";

export const register = async (req: Request, res: Response): Promise<any> => {
  try {
    const validatedData = registerSchema.parse(req.body);
    const response = await registerUser(
      validatedData.email,
      validatedData.password
    );
    return res.status(201).json(response);
  } catch (error: any) {
    return res.status(400).json({ message: error.message });
  }
};

export const login = async (req: Request, res: Response): Promise<any> => {
  try {
    const validatedData = loginSchema.parse(req.body);
    const response = await loginUser(
      validatedData.email,
      validatedData.password
    );
    return res.json(response);
  } catch (error: any) {
    return res.status(401).json({ message: error.message });
  }
};
