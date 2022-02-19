import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";
const AddUser = (props) => {
  const [userName, setUserName] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState(null);

  const userNameChangeHandler = (e) => {
    setUserName(e.target.value);
  };

  const ageChangeHandler = (e) => {
    console.log(e);
    setAge(e.target.value);
  };

  const addUserHandler = (e) => {
    e.preventDefault();

    if (userName.trim().length === 0 || age.trim().length === 0) {
      console.log("yes");
      setError({
        title: "Invalid Input",
        message: "Please Enter Valid Input",
      });
      return;
    }
    if (parseInt(age) < 1) {
      setError({
        title: "Invalid Age",
        message: "Please Enter Valid Age",
      });
      return;
    }
    const userDetail = {
      userName: userName,
      age: age,
      id: Math.random(),
    };

    console.log(userDetail);
    props.addUsers(userDetail);
    setUserName("");
    setAge("");
  };
  return (
    <div>
      {error !== null && (
        <ErrorModal
          title="Some Error Occured"
          message="We ran into Some Error"
          closeModal={() => {
            setError(null);
          }}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="userName">UserName</label>
          <input
            value={userName}
            onChange={userNameChangeHandler}
            id="userName"
            type="text"
          />
          <label htmlFor="age">Age</label>
          <input
            value={age}
            onChange={ageChangeHandler}
            id="age"
            type="number"
          />
          <Button type="submit">Add user</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
