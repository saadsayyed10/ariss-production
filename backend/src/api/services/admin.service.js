import bcryptjs from "bcryptjs";
import { generateTokenForPanel } from "../../lib/generate-token.js";
import prisma from "../../lib/prisma.orm.js";

// Register Panel User Account
export const registerPanelUserService = async (
  firstName,
  lastName,
  email,
  password,
  userType,
) => {
  const existing = await prisma.panel_users.findUnique({
    where: {
      email,
    },
  });
  if (existing) throw new Error("Panel user already exists");

  const hashPassword = await bcryptjs.hash(password, 10);

  const panelUser = await prisma.panel_users.create({
    data: {
      first_name: firstName,
      last_name: lastName,
      email,
      password: hashPassword,
      user_type: userType,
    },
  });

  return panelUser;
};

// Login Panel User Account
// Approve Moderator
// Diapprove Moderator
// Edit Panel User Account
// Delete Panel User Account
