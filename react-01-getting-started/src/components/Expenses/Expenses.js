import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";


const Expenses = (props) => {
    const [filteredExpenseYear, setFilteredExpenseYear] = useState("2020");

    const filterExpenseHandler = (filteredYear) => {
        setFilteredExpenseYear(filteredYear);
    };

    const filteredExpenses = props.expenses
        .filter(expense => expense.date.getFullYear() === Number(filteredExpenseYear));
    let expensesContent = <p style={{color: "whitesmoke", marginLeft: "20px" }}>
                            No Expenses found!
                        </p>
  
    if(filteredExpenses.length > 0) {
        expensesContent =   filteredExpenses.map((expense) => 
                                <ExpenseItem 
                                    key={expense.id}
                                    id={expense.id}
                                    date={expense.date}
                                    title={expense.title}
                                    price={expense.amount}
                                />
                            );
    }



    return (
    <div>
        {/* {} */}
      <Card className="expenses">
        <ExpensesFilter
          defaultChosenYear={filteredExpenseYear}
          onFilterExpense={filterExpenseHandler}
        />
        { expensesContent }
      </Card>
    </div>
  );
};

export default Expenses;
