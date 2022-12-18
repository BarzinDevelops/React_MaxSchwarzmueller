import React, {useState} from 'react';

import './ExpenseForm.css';

const ExpenseForm = () =>{
    // seperating each state of the input elements:
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    // storing all states in one object approach:
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: '',
    // })

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        
        //this is other approach: which sets an property of multi state object (userInput):
        // setUserInput((prevState)=>{
        //     return { ...prevState, enteredTitle: event.target.value }
        // });
    };
    const amounthangeHandler = (event) => {
        setEnteredAmount(event.target.value);

        //this is other approach: which sets an property of multi state object (userInput):
        // setUserInput((prevState)=>{
        //     return { ...prevState, enteredAmount: event.target.value, }
        // });
    };
  
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);

        //this is other approach: which sets an property of multi state object (userInput):
        // setUserInput((prevState)=>{
        //     return { ...prevState, enteredDate: event.target.value, }
        // });
    };
   
    const submitHandler = (event) => {
        event.preventDefault();  // prevents a page load (because that is a default behaviour of submitting forms).
        // console.log(userInput);
        // console.log(`
        // enteredTitle => ${enteredTitle}
        // enteredAmount => ${enteredAmount}
        // enteredDate => ${enteredDate}
        // `);

        // you have to create an new object of all the states you have, for later use:
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }

        console.log('expenseData', expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }

    return(
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Titel</label>
                    <input type='text' value={enteredTitle} onChange={titleChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' min="0.01" step="0.01" value={enteredAmount} onChange={amounthangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min="2019-01-01" max="2022-12-31" value={enteredDate} onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;