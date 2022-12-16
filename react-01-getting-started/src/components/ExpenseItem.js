import React from 'react';
import './ExpenseItem.css';

const ExpenseItem = (props) =>{
    const day = props.date.toLocaleString('nl-NL', {day: '2-digit'});
    const month = props.date.toLocaleString('nl-NL', {month: 'short'});
    const year =props.date.getFullYear();
    
    return(
        <div className='expense-item'>
                <div className='date-item'>
                   <div>{day}</div>
                   <div>{month}</div>
                   <div>{year}</div>
                </div>

            <div  className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>€{props.price}</div>
            </div>
        </div>

    );
}

export default ExpenseItem;