import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  return (
    <div className="expenses">
      {props.expenses.map((item) => {
        return (
          <ExpenseItem
            title={item.title}
            date={item.date}
            amount={item.amount}
          />
        );
      })}
    </div>
  );
};

export default ExpensesList;
