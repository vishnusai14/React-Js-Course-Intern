import { useContext } from "react";
import { Switch, Route } from "react-router-dom";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

import Layout from "./components/Layout/Layout";
import UserProfile from "./components/Profile/UserProfile";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import AuthContext from "./store/AuthContext";

function App() {
  const ctx = useContext(AuthContext);
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>

        <Route path="/auth" exact>
          {ctx.isLogged && <AuthPage />}
          {!ctx.isLogged && <Redirect to="/" />}
        </Route>

        <Route path="/profile" exact>
          {ctx.isLogged && <UserProfile />}
          {!ctx.isLogged && <Redirect to="/auth" />}
        </Route>
      </Switch>
      <Route path="*">
        <Redirect to="/" />
      </Route>
    </Layout>
  );
}

export default App;
