import React from "react";

import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

const App = props => {
  return (
    <div>
      <AddUser />
      <UsersList users={[{name: 'somebody', age: 40}]} />
    </div>
  );
}

export default App;
