import axios from "axios";
import { useContext, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../../store/AuthContext";
import classes from "./ProfileForm.module.css";

const ProfileForm = () => {
  const passwordRef = useRef();
  const ctx = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const submitHandler = (e) => {
    setLoading(true);
    e.preventDefault();
    const newPassword = passwordRef.current.value;
    const body = {
      idToken: ctx.token,
      password: newPassword,
      returnSecureToken: true,
    };
    axios
      .post(
        "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyD06pSQy81Z9kKotzwKl4O8XC8zgxpHXFk",
        body
      )
      .then((res) => {
        setLoading(false);
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
        console.log(err);
      });
  };
  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input ref={passwordRef} type="password" id="new-password" />
      </div>
      <div className={classes.action}>
        {loading && <p>Loading...</p>}
        {!loading && <button>Change Password</button>}
      </div>
    </form>
  );
};

export default ProfileForm;
