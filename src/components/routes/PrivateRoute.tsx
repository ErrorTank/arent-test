import { Redirect, Route, RouteProps } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { AuthProvider } from "../../contexts/AuthContext";
import { ReactNode, useEffect } from "react";
import mainApi from "../../api/mainApi";
import userServices from "../../services/userServices";

export const PrivateRoute = ({
  children,
  ...rest
}: RouteProps & { children: ReactNode }) => {
  const { isAuthenticated, getToken, user, setUser } = useAuth();

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
  }, [isAuthenticated, user, getToken, setUser]);

  return (
    <Route
      {...rest}
      render={({ location }) => {
        return isAuthenticated ? (
          <AuthProvider>{children}</AuthProvider>
        ) : (
          <Redirect to={{ pathname: "/login", state: { from: location } }} />
        );
      }}
    />
  );
};
