import {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from "react";
import { User } from "../type/user";
import mainApi from "../api/mainApi";
import userServices from "../services/userServices";
import { useAuth } from "../hooks/useAuth";

interface AuthContextData {
  user: User | null;
  setUser: (user: User | null) => void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const { isAuthenticated, getToken } = useAuth();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = getToken();
        if (token) {
          mainApi.setAuthToken(token);
          const userData = await userServices.getCurrentUser();
          setUser(userData);
        }
      } catch (error) {
        console.error("Failed to fetch user:", error);
      }
    };

    if (isAuthenticated && !user) {
      fetchUser();
    }
  }, [isAuthenticated, user, getToken]);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
