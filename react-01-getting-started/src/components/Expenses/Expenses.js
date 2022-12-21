import React, {useState} from 'react';
import './Expenses.css';
import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {
    const [filteredExpenseState, setFilteredExpenseState] = useState('');

    const filterExpenseHandler = (filteredExpense) => {       
        setFilteredExpenseState(filteredExpense);
    };

    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter onFilterExpense={filterExpenseHandler}/>
                { console.log('In Expenses.js => ', filteredExpenseState) }
                <ExpenseItem 
                    id={props.expenses[0].id}
                    date={props.expenses[0].date}
                    title={props.expenses[0].title}
                    price={props.expenses[0].amount}
                />
                <ExpenseItem 
                    id={props.expenses[1].id}
                    date={props.expenses[1].date}
                    title={props.expenses[1].title}
                    price={props.expenses[1].amount}
                />
                <ExpenseItem 
                    id={props.expenses[2].id}
                    date={props.expenses[2].date}
                    title={props.expenses[2].title}
                    price={props.expenses[2].amount}
                />
                <ExpenseItem 
                    id={props.expenses[3].id}
                    date={props.expenses[3].date}
                    title={props.expenses[3].title}
                    price={props.expenses[3].amount}
                />
            </Card>
        </div>
        
    )
}

export default Expenses;