import ExpenseItem from "./ExpenseItem";
import "./Expense.css";
import Card from "../UI/Card";

const Expense = (props) => {
  return (
    <Card className="expenses">
      {props.expenseItems.map((item) => {
        return (
          <ExpenseItem
            date={item.date}
            title={item.title}
            amount={item.amount}
          />
        );
      })}
    </Card>
  );
};

export default Expense;
