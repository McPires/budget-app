import React, { useState } from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const dummyExpenses = [
  {
    id: "e1",
    title: "Car Insurance",
    amount: 142,
    date: new Date(2021, 4, 12),
  },
  {
    id: "e2",
    title: "House Insurance",
    amount: 254,
    date: new Date(2022, 7, 26),
  },
  {
    id: "e3",
    title: "Motorcycle Insurance",
    amount: 105,
    date: new Date(2022, 1, 4),
  },
  {
    id: "e4",
    title: "Life Insurance",
    amount: 85,
    date: new Date(2020, 6, 18),
  },
];

function App() {
  const [expenses, setExpenses] = useState(dummyExpenses);

  const addExpenseHandler = (expense) => {
    console.log("In App.js");
    console.log(expense);
    // setExpenses(expenses.concat(expense));
    setExpenses((prevState) => {
      return [expense, ...prevState];
    });
  };

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />;
    </div>
  );
}

export default App;
