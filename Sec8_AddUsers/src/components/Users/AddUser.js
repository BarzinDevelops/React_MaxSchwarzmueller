import React, { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "./ErrorModal";

import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();

    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      return <ErrorModal message="You didn't provide any value!" />;
    }
    if (+enteredAge < 1) {
      return <ErrorModal message={`Age needs to be a number > 0 `} />;
    }
    props.onAddUser(enteredUsername, enteredAge);
    setEnteredUsername("");
    setEnteredAge("");
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const userAgeChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  return (
    <div>
      <ErrorModal title="An Error occured!" message="Something went wrong!" />
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">User Name:</label>
          <input
            id="username"
            type="text"
            value={enteredUsername}
            onChange={usernameChangeHandler}
          ></input>
          <label htmlFor="userage">Age (Years):</label>
          <input
            id="userage"
            type="text"
            value={enteredAge}
            onChange={userAgeChangeHandler}
          ></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
