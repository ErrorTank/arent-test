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
    const response = await mainApi.post<AuthResponse, LoginCredentials>(
      "/auth/login",
      credentials
    );
    return response;
  },

  logout: async () => {
    return await mainApi.post("/auth/logout", {});
  },
};

export default authServices;
