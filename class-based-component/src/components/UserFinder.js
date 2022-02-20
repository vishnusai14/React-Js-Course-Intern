import React, { Fragment, useState, useEffect } from "react";
import ErrorBoundary from "./ErrorBoundary";
import classes from "./UserFinder.module.css";
import Users from "./Users";

const DUMMY_USERS = [
  {
    id: "1",
    name: "Vishnu Prasanna",
  },
  {
    id: "2",
    name: "Sai Krishnan",
  },
  {
    id: "3",
    name: "Hari Prasad",
  },
];

class UserFinder extends React.Component {
  state = {
    filteredUsers: DUMMY_USERS,
    searchTerm: "",
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.searchTerm !== this.state.searchTerm) {
      this.setState((currPrevState) => ({
        ...currPrevState,
        filteredUsers: DUMMY_USERS.filter((user) =>
          user.name.includes(this.state.searchTerm)
        ),
      }));
    }
  };

  searchChangeHandler = (e) => {
    this.setState((prevState) => ({
      ...prevState,
      searchTerm: e.target.value,
    }));
  };

  render() {
    return (
      <ErrorBoundary>
        <Fragment>
          <input type="search" onChange={this.searchChangeHandler} />
          <Users users={this.state.filteredUsers} />
        </Fragment>
      </ErrorBoundary>
    );
  }
}
// const UserFinder = () => {
//   const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
//   const [searchTerm, setSearchTerm] = useState("");

//   useEffect(() => {
//     setFilteredUsers(
//       DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
//     );
//   }, [searchTerm]);

//   const searchChangeHandler = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   return (
//     <Fragment>
//       <input type="search" onChange={searchChangeHandler} />
//       <Users users={filteredUsers} />
//     </Fragment>
//   );
// };

export default UserFinder;
