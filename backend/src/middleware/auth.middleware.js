import jwt from "jsonwebtoken";
import prisma from "../lib/prisma.orm.js";
import { ENV } from "../config/env.config.js";

export const protectPanelRoute = async (req, res, next) => {
  try {
    const authHeader = req.header("Authorization");
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res
        .status(401)
        .json({ error: "Unauthorized: Token not provided" });
    }

    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, ENV.JWT_SECRET);

    const panelUser = await prisma.panel_users.findUnique({
      where: {
        id: decoded.panelUserId,
      },
    });
    if (!panelUser) {
      return res
        .status(401)
        .json({ error: "Unauthorized: Panel user not found" });
    }

    req.panelUser = panelUser;
    next();
  } catch (error) {
    return res.status(401).json({ error: error.message });
  }
};
