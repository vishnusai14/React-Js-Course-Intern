import React, { useState } from "react";

import "./Expense.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import ExpensesChart from "./ExpenseChart";

const Expense = (props) => {
  const [filterdYear, setFilteredYear] = useState("2020");

  const yearChangeHandler = (newYear) => {
    setFilteredYear(newYear);
  };
  const filteredExpenses = props.expenseItems.filter((expense) => {
    return expense.date.getFullYear().toString() === filterdYear;
  });
  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filterdYear}
        onChangeFilter={(newYear) => {
          yearChangeHandler(newYear);
        }}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpenseList filteredExpenses={filteredExpenses} />
    </Card>
  );
};

export default Expense;
