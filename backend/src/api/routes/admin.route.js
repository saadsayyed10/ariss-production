import * as panelUserController from "../controllers/admin.controller.js";
import { Router } from "express";
import { protectPanelRoute } from "../../middleware/auth.middleware.js";

const adminRouter = Router();

adminRouter.post("/register", panelUserController.registerPanelUserController);
adminRouter.post("/login", panelUserController.loginPanelUserController);

adminRouter.get(
  "/profile",
  protectPanelRoute,
  panelUserController.loginPanelUserController,
);

export default adminRouter;
