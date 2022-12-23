import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";


const Expenses = (props) => {
    const [filteredExpenseYear, setFilteredExpenseYear] = useState("2020");

    const filterExpenseHandler = (filteredYear) => {
        setFilteredExpenseYear(filteredYear);
    };

    const filteredExpenses = props.expenses
        .filter(expense => expense.date.getFullYear() === Number(filteredExpenseYear));
    
    return (
        <Card className="expenses">
            <ExpensesFilter
                defaultChosenYear={filteredExpenseYear}
                onFilterExpense={filterExpenseHandler}
            />
            <ExpensesList items={filteredExpenses} />
        </Card>
    );
};

export default Expenses;
