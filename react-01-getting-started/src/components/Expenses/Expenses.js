import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [filteredExpenseState, setFilteredExpenseState] = useState("2019");

  const filterExpenseHandler = (filteredExpense) => {
    setFilteredExpenseState(filteredExpense);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          defaultChosenYear={filteredExpenseState}
          onFilterExpense={filterExpenseHandler}
        />
        {props.expenses.map((expense) => (
          <ExpenseItem 
            key={expense.id}
            id={expense.id}
            date={expense.date}
            title={expense.title}
            price={expense.amount}
          />
        ))}

      </Card>
    </div>
  );
};

export default Expenses;
