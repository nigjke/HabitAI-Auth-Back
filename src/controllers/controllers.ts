import { Router, Request, Response } from "express";
import { TwitService } from "../service/service";
import { authMiddleware } from "../middleware/middleware";
import { createTwitDto } from "../dto/dto";

const router = Router();
const twitsService = new TwitService();

router.post("/", authMiddleware, (req: Request, res: Response) => {
  const validation = createTwitDto.safeParse(req.body);
  if (!validation.success) {
    res.status(400).json({ message: validation.error.errors });
    return;
  }

  const twit = twitsService.createTwit(req.body);
  res.status(201).json(twit);
});

export const twitRouter = router;
