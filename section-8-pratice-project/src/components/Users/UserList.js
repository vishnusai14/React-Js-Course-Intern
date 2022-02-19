import Card from "../UI/Card";
import classes from "./UserList.module.css";
const UserList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => {
          return (
            <li
              key={user.id}
            >{`${user.userName} is ${user.age} Years Old `}</li>
          );
        })}
      </ul>
    </Card>
  );
};

export default UserList;
