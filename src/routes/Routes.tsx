import { BrowserRouter, Switch } from "react-router-dom";
import { PrivateRoute } from "../components/routes/PrivateRoute";
import { GuestRoute } from "../components/routes/GuestRoute";
import Login from "./Login/Login";
import TopPage from "./TopPage/TopPage";
import { Layout } from "../components/Layout/Layout";

export const Routes = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <GuestRoute path="/login">
            <Login />
          </GuestRoute>
          <PrivateRoute path="/">
            <TopPage />
          </PrivateRoute>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};
