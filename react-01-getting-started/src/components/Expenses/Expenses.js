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

  return (
    <div>
        {/* {} */}
      <Card className="expenses">
        <ExpensesFilter
          defaultChosenYear={filteredExpenseYear}
          onFilterExpense={filterExpenseHandler}
        />
        {/* {    
            props.expenses.map((expense) => {
               return expense.date.getFullYear() === Number(filteredExpenseYear) &&
                <ExpenseItem 
                    key={expense.id}
                    id={expense.id}
                    date={expense.date}
                    title={expense.title}
                    price={expense.amount}
                />
                
            })
        } */}
        {/* {console.log('props.expenses', props.expenses)} */}
        {    
            props.expenses.map((expense) => 
               
                <ExpenseItem 
                    key={expense.id}
                    id={expense.id}
                    date={expense.date}
                    title={expense.title}
                    price={expense.amount}
                />
                
            ).filter(expense => expense.props.date.getFullYear() === Number(filteredExpenseYear))
        }
        {/* {    
            props.expenses.filter((expense) =>  [expense.date.getFullYear() === Number(filteredExpenseYear)] )
        } */}


      </Card>
    </div>
  );
};

export default Expenses;
