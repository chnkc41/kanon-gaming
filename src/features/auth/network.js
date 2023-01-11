import axios from 'axios';
import { urls } from 'constants';

const RegisterRequest = async (name, email, password) => {
  try {
    const result = await axios.post(
      urls.URL_REGISTER,
      {
        name,
        email,
        password
      },
      {
        withCredentials: true,
        headers: { 'content-type': 'application/json; charset=utf-8' }
      }
    );

    if (!result) {
      return { success: false };
    }

    return { success: true };
  } catch (ex) {
    return { success: false };
  }
};

export { RegisterRequest };
