import React from 'react';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from "./Card";

const ExpenseItem = (props) =>{
    // console.log(`props in ExpenseItem.js: `, props)

    return(
        <Card className='expense-item'>
            <ExpenseDate date={props.date}/>
            <div  className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>€{props.price}</div>
            </div>
        </Card>

    );
}

export default ExpenseItem;