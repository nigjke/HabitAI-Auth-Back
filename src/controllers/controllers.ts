import { Router, Request, Response } from "express";
import { TwitService } from "../service/service";
import { authMiddleware } from "../middleware/middleware";

const router = Router();
const twitsService = new TwitService();

router.post("/", authMiddleware, (req: Request, res: Response): void => {
  if (!req.body?.text?.length) {
    res.status(400).json({ message: "Text is required" });
    return;
  }

  const twit = twitsService.createTwit(req.body);
  res.status(201).json(twit);
});

export const twitRouter = router;
