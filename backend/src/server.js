import express from "express";
import cors from "cors";
import { ENV } from "./config/env.config.js";

const app = express();
const PORT = ENV.PORT;

app.use(express.json());
app.use(cors());

app.listen(PORT, () => {
  console.log(`Server up and running on PORT: ${PORT}`);
});
