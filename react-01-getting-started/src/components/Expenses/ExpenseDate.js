import React from "react";
import "./ExpenseDate.css";

const ExpenseDate = (props) => {
  const newExpensesDate = new Date(
    props.date.getFullYear(),
    props.date.getMonth() - 1,
    props.date.getDate()
  );
  const day = newExpensesDate.toLocaleString("nl-NL", { day: "2-digit" });
  const month = newExpensesDate.toLocaleString("nl-NL", { month: "long" });
  const year = props.date.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__day">{day}</div>
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
    </div>
  );
};
export default ExpenseDate;
