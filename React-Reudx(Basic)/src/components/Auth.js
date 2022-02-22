import classes from "./Auth.module.css";
import { useSelector, useDispatch } from "react-redux";
import UserProfile from "./UserProfile";
import * as actionTypes from "../store/authCreator";
import Header from "./Header";

const Auth = () => {
  const loggedIn = useSelector((state) => state.auth.loggedIn);
  const dispatch = useDispatch();
  const loginHandler = () => {
    dispatch(actionTypes.logIn());
  };

  return (
    <main className={classes.auth}>
      {loggedIn && <Header />}
      {loggedIn && <UserProfile />}
      {!loggedIn && (
        <section>
          <form>
            <div className={classes.control}>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" />
            </div>
            <div className={classes.control}>
              <label htmlFor="password">Password</label>
              <input type="password" id="password" />
            </div>
            <button onClick={loginHandler}>Login</button>
          </form>
        </section>
      )}
    </main>
  );
};

export default Auth;
