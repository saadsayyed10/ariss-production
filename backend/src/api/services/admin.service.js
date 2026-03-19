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
export const loginPanelUserService = async (email, password) => {
  const panelUser = await prisma.panel_users.findUnique({
    where: {
      email,
    },
  });

  const isValidPassword = await bcryptjs.compare(password, panelUser.password);
  if (!isValidPassword) throw new Error("Password is incorrect");

  const token = generateTokenForPanel(panelUser.id);

  return { token, panelUser };
};

// Fetch profile
export const fetchPanelUserProfile = async (panelUserId) => {
  return await prisma.panel_users.findUnique({
    where: {
      id: panelUserId,
    },
    select: {
      first_name: true,
      last_name: true,
      email: true,
      approval_status: true,
      created_at: true,
      updated_at: true,
    },
  });
};

// Fetch all accounts
// Approve Moderator
// Diapprove Moderator
// Delete Panel User Account
