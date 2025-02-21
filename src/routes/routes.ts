import { Router } from "express";

const router = Router();

router.post("/login", login);
router.post("/logout", logout);
router.post("/refresh");

export default router;
