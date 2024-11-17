import { Redirect, Route, RouteProps } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { ReactNode } from "react";

export const GuestRoute = ({
  children,
  ...rest
}: RouteProps & { children: ReactNode }) => {
  const { isAuthenticated } = useAuth();

  return (
    <Route
      {...rest}
      render={({ location }) => {
        return !isAuthenticated ? (
          children
        ) : (
          <Redirect to={{ pathname: "/", state: { from: location } }} />
        );
      }}
    />
  );
};
