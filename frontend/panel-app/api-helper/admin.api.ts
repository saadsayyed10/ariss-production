import axios from "axios";
import { API_URL } from "./apuUrl";

export const registerPanelUserAPI = async (
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  userType: string,
) => {
  return axios.post(`${API_URL}/panel/users/register`, {
    firstName,
    lastName,
    email,
    password,
    userType,
  });
};

export const loginPanelUserAPI = async (email: string, password: string) => {
  return axios.post(`${API_URL}/panel/users/login`, { email, password });
};
