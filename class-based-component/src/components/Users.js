import React from "react";
import User from "./User";

import classes from "./Users.module.css";

const UsersList = (props) => {
  return (
    <ul>
      {props.users.map((user) => (
        <User key={user.id} name={user.name} />
      ))}
    </ul>
  );
};

class Users extends React.Component {
  state = {
    showUsers: true,
  };

  toggleUsersHandler = () => {
    this.setState((prevState) => ({
      ...prevState,
      showUsers: !prevState.showUsers,
    }));
  };
  render() {
    return (
      <div className={classes.users}>
        <button onClick={this.toggleUsersHandler}>
          {this.state.showUsers ? "Hide" : "Show"} Users
        </button>
        {this.state.showUsers && <UsersList users={this.props.users} />}
      </div>
    );
  }
}

// const Users = () => {
//   const [showUsers, setShowUsers] = useState(true);

//   const toggleUsersHandler = () => {
//     setShowUsers((curState) => !curState);
//   };

//   return (

//   );
// };

export default Users;
