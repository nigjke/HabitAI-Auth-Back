import { Router } from "express";

const router = Router();

router.post("/register", (req, res) => {
  res.send("Its registration");
});

router.get("/users", (req, res) => {
  res
    .json({
      message: "success",
    })
    .status(200);
});
export default router;
