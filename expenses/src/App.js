import "./App.css";
import React, { useState } from "react";
import Expense from "./component/Expenses/Expense";
import NewExpense from "./component/NewExpenses/NewExpense";

function App() {
  const [expenseItems, setExpenseItems] = useState([
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ]);

  const addExpense = (newExpense) => {
    setExpenseItems((prevState) => {
      return [...prevState, newExpense];
    });
  };
  return (
    <div className="App">
      <NewExpense addExpense={addExpense} />
      <Expense expenseItems={expenseItems} />
    </div>
  );
}

export default App;
