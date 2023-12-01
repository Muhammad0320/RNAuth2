import { API_KEY, BASE_URL } from "./constants";

import axios from "axios";

const authenicate = async (mode, email, password) => {
  const url = `${BASE_URL}${mode}?key=${API_KEY}`;

  const res = await axios.post(url, {
    email,
    password,
    returnSecureToken: true,
  });

  const { idToken: token } = res.data;
  return token;
};

export const signupApi = async (email, password) => {
  const data = await authenicate("signUp", email, password);

  return data;
};

export const loginApi = async (email, password) => {
  const data = await authenicate("signInWithPasssword", email, password);

  return data;
};
