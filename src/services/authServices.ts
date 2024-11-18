import mainApi from "../api/mainApi";

interface LoginCredentials {
  email: string;
  password: string;
}

interface AuthResponse {
  token: string;
  user: {
    id: string;
    email: string;
  };
}

const authServices = {
  login: async (credentials: LoginCredentials) => {
    // const response = await mainApi.post<AuthResponse, LoginCredentials>(
    //   "/auth/login",
    //   credentials
    // );
    return {
      token: "1234567890",
      user: {
        id: "1234567890",
        email: "test@test.com",
      },
    };
  },

  logout: async () => {
    // return await mainApi.post("/auth/logout", {});
    return { success: true };
  },
};

export default authServices;
