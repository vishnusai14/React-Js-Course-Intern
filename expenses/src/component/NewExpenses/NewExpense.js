import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [edit, setEdit] = useState(false);
  const addNewExpense = (expenseDetail) => {
    const expenses = {
      ...expenseDetail,
      id: Math.random(),
    };
    props.addExpense(expenses);
  };
  const openForm = () => {
    setEdit(true);
  };
  const closeForm = () => {
    setEdit(false);
  };
  return (
    <div className="new-expense">
      {!edit && <button onClick={openForm}>Add New Expense</button>}
      {edit && (
        <ExpenseForm closeForm={closeForm} addNewExpense={addNewExpense} />
      )}
    </div>
  );
};

export default NewExpense;
