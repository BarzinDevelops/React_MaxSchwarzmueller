import React from 'react';
import './ExpenseItem.css';

const ExpenseItem = () =>{
    const dt = new Date();
    return(
        <div className='expense-item'>
                <div className='date-item'>
                    {dt.toLocaleDateString('nl-NL', 
                    { day:"numeric", month:"long", year: 'numeric'})}
                </div>

            <div  className='expense-item__description'>
                <h2>Car Insurance</h2>
                <div className='expense-item__price'>€294.67</div>
            </div>
        </div>

    );
}

export default ExpenseItem;