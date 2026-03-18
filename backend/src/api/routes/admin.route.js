import * as panelUserController from "../controllers/admin.controller.js";
import { Router } from "express";

const adminRouter = Router();

adminRouter.post("/register", panelUserController.registerPanelUserController);

export default adminRouter;
