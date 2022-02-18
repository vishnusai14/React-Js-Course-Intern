import "./ExpenseDate.css";
const ExpenseDate = (props) => {
  const validDate = new Date(props.date);
  const month = validDate.toLocaleString("en-US", { month: "long" });
  const day = validDate.toLocaleString("en-US", { day: "2-digit" });
  const year = validDate.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__day">{day}</div>
      <div className="expense-date__year">{year}</div>
    </div>
  );
};

export default ExpenseDate;
