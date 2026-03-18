import { Router } from "express";
import adminRouter from "./admin.route.js";

const mainRouter = Router();

mainRouter.use("/panel/users", adminRouter);

export default mainRouter;
