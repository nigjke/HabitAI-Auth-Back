import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello");
});

app.listen(PORT, () => {
  console.log(`server live on port : ${PORT}`);
});
