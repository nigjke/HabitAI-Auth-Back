import { z } from "zod";

export const registerSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6, "Пароль должен быть минимум 6 символов"),
});

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});
