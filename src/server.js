import express from "express";
import { router } from "./routes/router.js";
import cors from "cors";
const app = express();
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
  optionSucessStatus: 200,
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(router);

app.listen(3030, () => console.log("Online server at localhost:3030"));
