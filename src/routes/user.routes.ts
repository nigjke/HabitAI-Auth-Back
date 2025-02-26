import express from "express";
import { getProfile } from "../controllers/user.controllers";
import { authMiddleware } from "../middleware/auth.middleware";

const router = express.Router();

router.get("/profile", authMiddleware, getProfile);

export default router;
