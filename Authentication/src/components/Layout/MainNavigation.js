import { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import AuthContext from "../../store/AuthContext";

import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  const ctx = useContext(AuthContext);
  const history = useHistory();
  const isLogged = ctx.isLogged;
  const logoutHandler = () => {
    ctx.logout();
    history.replace("/auth");
  };
  return (
    <header className={classes.header}>
      <Link to="/">
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
          {!isLogged && (
            <li>
              <Link to="/auth">Login</Link>
            </li>
          )}
          {isLogged && (
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          )}

          {isLogged && (
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
