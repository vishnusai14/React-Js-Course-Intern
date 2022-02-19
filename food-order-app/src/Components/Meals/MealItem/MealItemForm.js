import { useRef, useState } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const amountRef = useRef();
  const [amountValid, setAmountValid] = useState(false);
  const submitHandler = (e) => {
    e.preventDefault();
    const enteredAmount = amountRef.current.value;
    const enteredAmountNumber = parseInt(enteredAmount);
    console.log(enteredAmount, enteredAmountNumber);
    if (enteredAmountNumber < 1 || enteredAmountNumber > 5) {
      setAmountValid(true);
      return;
    }
    setAmountValid(false);
    props.addToCart(enteredAmountNumber);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountRef}
        label="Amount"
        input={{
          id: "amount__" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button> + Add</button>
      {amountValid && <p>Enter valid Amount</p>}
    </form>
  );
};
export default MealItemForm;
