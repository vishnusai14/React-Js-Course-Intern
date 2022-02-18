import React from "react";
import ExpenseItem from "./ExpenseItem";
const ExpenseList = (props) => {
  console.log(props);
  let noExpense = <p style={{ color: "white" }}>No Expense Found</p>;
  if (props.filteredExpenses.length === 0) {
    return noExpense;
  }
  return (
    <>
      <ul className="expenses-list">
        {props.filteredExpenses.map((item) => {
          return (
            <ExpenseItem
              key={item.id}
              date={item.date}
              title={item.title}
              amount={item.amount}
            />
          );
        })}
      </ul>
    </>
  );
};

export default ExpenseList;
