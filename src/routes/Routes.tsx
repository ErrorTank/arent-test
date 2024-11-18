import { BrowserRouter, Route, Switch } from "react-router-dom";
import { PrivateRoute } from "../components/routes/PrivateRoute";
import { GuestRoute } from "../components/routes/GuestRoute";
import Login from "./Login/Login";
import TopPage from "./TopPage/TopPage";
import { Layout } from "../components/Layout/Layout";
import ColumnPage from "./ColumnPage/ColumnPage";
import MyRecord from "./MyRecord/MyRecord";

export const Routes = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/column">
            <ColumnPage />
          </Route>
          <PrivateRoute exact path="/">
            <TopPage />
          </PrivateRoute>
          <PrivateRoute path="/my-record">
            <MyRecord />
          </PrivateRoute>
          <GuestRoute path="/login">
            <Login />
          </GuestRoute>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};
