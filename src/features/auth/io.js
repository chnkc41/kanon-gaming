import { RegisterRequest, LoginRequest } from './network';

const addNewUser = async (name, email, password) => {
  try {
    const { success } = await RegisterRequest(name, email, password);
    if (!success) {
      return { success: false };
    }

    return { success: true };
  } catch (e) {
    return { success: false };
  }
};

const logUserIn = async (email, password) => {
  try {
    const { success, payload } = await LoginRequest(email, password);
    if (!success) {
      return { success: false };
    }

    const { access_token } = payload; 

    return { success: true, payload: access_token };
  } catch (e) {
    return { success: false };
  }
};

export { addNewUser, logUserIn };
