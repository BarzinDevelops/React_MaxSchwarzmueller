import React, { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "./ErrorModal";

import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();

    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title : "ERROR: No Inputs!",
        message : "Please provide input for Username and Age."
        });
      return;
    }
    if (+enteredAge < 1) {
        setError({
          title : "ERROR: Invalid Age!",
          message : `Please provide a valid Age (number > 0 )`
        });
      return;
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

  const errorHandler = () =>{
    setError(null);
  }

  return (
    <div>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
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
