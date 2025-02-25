import { Request, Response, NextFunction } from "express";

export const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      res.status(401).json({ message: "Unauthorized" });
      return;
    }
    next();
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
