import express, { Request, Response } from "express";
import cors from "cors";
import { twitRouter } from "./controllers/controllers";

const app = express();
app.use(cors());
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/twist', twitRouter);

app.use('*', (req,res) => {
  res
  .status(404)
  .json({
    message : "Not Found"
  })
})
  

app.listen(PORT, () => {
  console.log(`server live on port : ${PORT}`);
});
