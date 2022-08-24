import express from "express";
import { router } from "./routes/router.js";
import cors from "cors";
const app = express();
const corsOptions = {
  origin: "https://share-blog-front.vercel.app/",
  credentials: true,
  optionSucessStatus: 200,
};
const port = process.env.PORT || 3030;
app.use(cors(corsOptions));
app.use(express.json());
app.use(router);

app.listen(port, () => console.log("Online server at localhost:3030"));
