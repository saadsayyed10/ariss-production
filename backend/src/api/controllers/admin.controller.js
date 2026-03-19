import * as panelUserServices from "../services/admin.service.js";

export const registerPanelUserController = async (req, res) => {
  try {
    const { firstName, lastName, email, password, userType } = req.body;
    const data = { firstName, lastName, email, password, userType };

    if (!data) {
      return res.status(404).json({ error: "All fields are required" });
    }

    if (!password || password < 8) {
      return res
        .status(400)
        .json({ error: "Password should contain more than 8 characters" });
    }

    const panelUser = await panelUserServices.registerPanelUserService(
      firstName,
      lastName,
      email,
      password,
      userType,
    );
    res.status(201).json({ message: "Panel user created", panelUser });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const loginPanelUserController = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(404)
        .json({ error: "Missing fields (email and password) are required" });
    }

    const { token, panelUser } = await panelUserServices.loginPanelUserService(
      email,
      password,
    );

    res.status(200).json({ message: "User logged in", token, panelUser });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const fetchPanelUserProfileController = async (req, res) => {
  try {
    if (!req.panelUser) {
      return res
        .status(401)
        .json({ error: "Unauthorized: Token not provided" });
    }

    const panelUser = await panelUserServices.fetchPanelUserProfileService(
      req.panelUser.id,
    );
    res.status(200).json({ panelUser });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};
