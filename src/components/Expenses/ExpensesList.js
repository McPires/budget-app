import React from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  return (
    <Card className="expenses">
      {props.expenses.map((item) => {
        return (
          <ExpenseItem
            title={item.title}
            date={item.date}
            amount={item.amount}
          />
        );
      })}
    </Card>
  );
};

export default ExpensesList;
