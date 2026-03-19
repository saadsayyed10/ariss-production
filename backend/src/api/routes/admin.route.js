import * as panelUserController from "../controllers/admin.controller.js";
import { Router } from "express";

const adminRouter = Router();

adminRouter.post("/register", panelUserController.registerPanelUserController);
adminRouter.post("/login", panelUserController.loginPanelUserController);

export default adminRouter;
