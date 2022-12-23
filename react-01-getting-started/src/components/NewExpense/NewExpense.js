import React, {useState} from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) =>{
    const [formContent, setFormContent] = useState('');

    const saveExpenseDataHandler = (enteredExpenseData) =>{
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
    };

    
    const addNewExpenseHandler = ()=>{
        setFormContent(<ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>);
    }

    return (
        <div className='new-expense'>
            {!formContent ? <button onClick={addNewExpenseHandler}>Add New Expense</button> : formContent}
        </div>
    );
}

export default NewExpense;