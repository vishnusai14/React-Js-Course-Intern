import { useState } from "react";
import "./App.css";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

function App() {
  const [users, setUsers] = useState([]);

  const addUsers = (userDetail) => {
    setUsers((prevState) => {
      return [...prevState, userDetail];
    });
  };
  return (
    <div className="App">
      <AddUser addUsers={addUsers} />
      <UserList users={users} />
    </div>
  );
}

export default App;
