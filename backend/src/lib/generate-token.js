import jwt from "jsonwebtoken";
import { ENV } from "../config/env.config.js";

export const generateTokenForPanel = (panelUserId) => {
  return jwt.sign({ panelUserId }, ENV.JWT_SECRET, { expiresIn: "10d" });
};
