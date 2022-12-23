import React, { useState } from "react";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";

const Expenses = (props) => {
    const [filteredExpenseYear, setFilteredExpenseYear] = useState("2021");

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
            <ExpensesChart expenses={filteredExpenses}/>
            <ExpensesList items={filteredExpenses} />
        </Card>
    );
};

export default Expenses;
