import { Redirect, Route, RouteProps } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { AuthProvider } from "../../contexts/AuthContext";
import { ReactNode } from "react";

export const PrivateRoute = ({
  children,
  ...rest
}: RouteProps & { children: ReactNode }) => {
  const { isAuthenticated } = useAuth();

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
