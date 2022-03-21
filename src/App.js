import ExpensesList from "./components/Expenses/ExpensesList";

function App() {
  const expenses = [
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

  return (
    <div className="App">
      <h2 className="App-header">Learn react</h2>
      <ExpensesList expenses={expenses} />;
    </div>
  );
}

export default App;
