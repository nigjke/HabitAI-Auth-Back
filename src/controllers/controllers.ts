import { Router, Response, Request } from "express";
import { TwitService } from "../service/service";
import { authMiddleware } from "../middleware/middleware";

const router = Router();
const twitsService = new TwitService();

router.post('/', authMiddleware, (req , res) => {
   const twit = twitsService.createTwit(req.body)
   res.status(201).json(twit)
})

export const twitRouter = router;