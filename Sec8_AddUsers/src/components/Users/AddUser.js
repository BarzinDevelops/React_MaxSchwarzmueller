import React, { useState } from 'react';

const AddUser = props => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');

    const addUserHandler = event =>{
        event.preventDefault();
        
        
        console.log(enteredUsername, enteredAge);
    }
    const usernameChangeHandler = event =>{
        setEnteredUsername(event.target.value);
    }
    const userAgeChangeHandler = event =>{
        setEnteredAge(event.target.value);
    }
    return(
        <div>
            <form onSubmit={addUserHandler}>
                <label htmlFor='username'>User Name:</label>
                <input id='username' type='text' onChange={usernameChangeHandler}></input>
                <label htmlFor='userage'>Age (Years):</label>
                <input id='userage' type='text' onChange={userAgeChangeHandler}></input>
                <button type='submit' >Add User</button>
            </form>
        </div>
    );
}

export default AddUser;