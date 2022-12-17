import React, {useState} from 'react';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from '../UI/Card';

const ExpenseItem = (props) =>{
    // console.log(`props in ExpenseItem.js: `, props)
    const [title, setTitle] = useState(props.title)
    const clickHandler = (e) => {
        setTitle(()=> e.target.innerHTML)
    }
    return(
        <Card className='expense-item'>
            <ExpenseDate date={props.date}/>
            <div  className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>€{props.price}</div>
                <button onClick={clickHandler}>Change Title</button>
            </div>
        </Card>

    );
}

export default ExpenseItem;