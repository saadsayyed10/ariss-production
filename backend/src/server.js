import express from "express";
import cors from "cors";
import { ENV } from "./config/env.config.js";
import mainRouter from "./api/routes/index.route.js";

const app = express();
const PORT = ENV.PORT;

app.use(express.json());
app.use(cors());

// Main API endpoint
app.use("/api", mainRouter);

app.get("/health", (_req, res) => {
  res.send("<p><b>Web services are working properly: 200</b></p>");
});

app.listen(PORT, () => {
  console.log(`Server up and running on PORT: ${PORT}`);
});
