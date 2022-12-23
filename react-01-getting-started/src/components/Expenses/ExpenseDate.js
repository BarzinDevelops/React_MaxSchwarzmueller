import React from 'react';
import './ExpenseDate.css'

const ExpenseDate = (props) =>{
    let day = props.date.toLocaleString('nl-NL', {day: '2-digit'});
    let month = props.date.toLocaleString('nl-NL', {month: 'long'});
    const year =props.date.getFullYear();
    // console.log('month tolocalstring version =>', month)
    // console.log('month in props.date verson =>', props.date)
    const testDate = new Date(props.date.getFullYear(),props.date.getMonth()-1,props.date.getDate())
    day = testDate.toLocaleString('nl-NL', {day: '2-digit'});
    month = testDate.toLocaleString('nl-NL', {month: 'long'});
    // year = testDate.toLocaleString('nl-NL', {day: '2-digit'});

    console.log('testDate version =>', testDate)
    
    return(
        <div className='expense-date'>
            <div className='expense-date__day'>{day}</div>
            <div className='expense-date__month'>{month}</div>
            <div className='expense-date__year'>{year}</div>
        </div>
    );
}

export default ExpenseDate