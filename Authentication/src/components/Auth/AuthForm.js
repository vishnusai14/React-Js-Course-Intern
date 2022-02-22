import { useState, useRef, useContext } from "react";
import { useHistory } from "react-router-dom";
import classes from "./AuthForm.module.css";
import axios from "axios";
import AuthContext from "../../store/AuthContext";
const AuthForm = () => {
  const ctx = useContext(AuthContext);
  const history = useHistory();
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (e) => {
    console.log("Submitting");
    setLoading(true);
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    if (isLogin) {
      let body = {
        email: email,
        password: password,
      };
      axios
        .post(
          "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD06pSQy81Z9kKotzwKl4O8XC8zgxpHXFk",
          body
        )
        .then((res) => {
          setLoading(false);
          let token = res.data.idToken;
          let expTime = new Date(
            new Date().getTime + parseInt(res.data.expiresIn) * 1000
          );
          ctx.login(token, expTime);
          history.replace("/");
          console.log(res);
        })
        .catch((err) => {
          setLoading(false);
          let errMesage = "Authentication Failed";
          if (
            err.response.data &&
            err.response.data.error &&
            err.response.data.error.message
          ) {
            errMesage = err.response.data.error.message;
          }

          alert(errMesage);
        });
    } else {
      let body = {
        email: email,
        password: password,
        returnSecureToken: true,
      };
      axios
        .post(
          "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD06pSQy81Z9kKotzwKl4O8XC8zgxpHXFk",
          body
        )
        .then((res) => {
          let token = res.data.idToken;
          ctx.login(token);
          console.log(res);
        })
        .catch((err) => {
          setLoading(false);
          let errMesage = "Authentication Failed";
          if (
            err.response.data &&
            err.response.data.error &&
            err.response.data.error.message
          ) {
            errMesage = err.response.data.error.message;
          }

          alert(errMesage);

          console.log(err.response);
        });
    }
  };

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input ref={emailRef} type="email" id="email" required />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input ref={passwordRef} type="password" id="password" required />
        </div>
        {loading && <p style={{ color: "white" }}>Loading...</p>}
        <div className={classes.actions}>
          {!loading && (
            <button type="submit">
              {isLogin ? "Login" : "Create Account"}
            </button>
          )}
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
