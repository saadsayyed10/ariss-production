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
