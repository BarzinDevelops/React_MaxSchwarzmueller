import React from 'react';
import './ExpenseItem.css';

const ExpenseItem = (props) =>{
    return(
        <div className='expense-item'>
                <div className='date-item'>
                    {props.date.toLocaleDateString('nl-NL', {day: 'numeric', month: 'long', year: 'numeric'})}
                </div>

            <div  className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>€{props.price}</div>
            </div>
        </div>

    );
}

export default ExpenseItem;