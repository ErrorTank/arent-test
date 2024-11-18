import { useCallback } from "react";
import authServices from "../services/authServices";
import { TOKEN_KEY } from "../constants/auth";
import { useApi } from "./useApi";
import { User } from "../type/user";
import { useAuthContext } from "../contexts/AuthContext";
import mainApi from "../api/mainApi";

interface LoginResponse {
  token: string;
  user: User;
}

export const useAuth = () => {
  const { user, setUser } = useAuthContext();

  const {
    isLoading: isLoggingIn,
    error: loginError,
    execute: executeLogin,
  } = useApi<LoginResponse>(
    ["login"],
    (email: string, password: string) =>
      authServices.login({ email, password }),
    { manual: true }
  );

  const {
    isLoading: isLoggingOut,
    error: logoutError,
    execute: executeLogout,
  } = useApi(["logout"], () => authServices.logout(), { manual: true });

  const login = useCallback(
    async (email: string, password: string) => {
      const result = await executeLogin(email, password);

      if (result.success && result.data) {
        const { token, user } = result.data;
        localStorage.setItem(TOKEN_KEY, token);
        setUser(user);
        mainApi.setAuthToken(token);
      }

      return result;
    },
    [executeLogin]
  );

  const logout = useCallback(async () => {
    const result = await executeLogout();

    localStorage.removeItem(TOKEN_KEY);
    setUser(null);
    mainApi.clearAuthToken();

    return result;
  }, [executeLogout]);

  const getToken = useCallback(() => {
    return localStorage.getItem(TOKEN_KEY);
  }, []);

  return {
    user,
    isAuthenticated: !!getToken(),
    login,
    logout,
    getToken,
    isLoggingIn,
    isLoggingOut,
    loginError,
    logoutError,
    setUser,
  };
};
