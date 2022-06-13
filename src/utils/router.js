import {
  BrowserRouter as ApplicationRouter,
  Switch,
  Route,
} from "react-router-dom";
import Dashboard from "../pages/Dashboard";

const Router = () => {
  return (
    <ApplicationRouter>
      <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>
      </Switch>
    </ApplicationRouter>
  );
};

export default Router;
