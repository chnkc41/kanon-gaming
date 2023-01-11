import { RegisterRequest, logUserIn } from './network';

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

export { addNewUser };
