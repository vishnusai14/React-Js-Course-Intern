import classes from "./Counter.module.css";
import * as actionTypes from "../store/counterCreator";
import { useSelector, useDispatch } from "react-redux";
const Counter = (props) => {
  const counter = useSelector((state) => state.counter.counter);
  const showCounter = useSelector((state) => state.counter.showCounter);
  const dispatch = useDispatch();

  const increaseCounter = () => {
    dispatch(actionTypes.startCounter());
  };

  const reduceCounter = () => {
    dispatch(actionTypes.reduceCounter());
  };

  const increaseHandler = () => {
    dispatch(actionTypes.increaseCounter(10));
  };

  const toggleHandler = () => {
    dispatch(actionTypes.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && (
        <>
          <div className={classes.value}>{counter}</div>
          <button onClick={increaseCounter}>Increase Counter</button>
          <button onClick={reduceCounter}>Reduce Counter</button>
          <button onClick={increaseHandler}>Increase by 10</button>
        </>
      )}
      <button onClick={toggleHandler}>Toggle Counter</button>
    </main>
  );
};

//class based component

// const mapStateToProps = (state) => {
//   console.log(state);
//   return {
//     counter: state.counter,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     startCounter: () => {
//       dispatch(actionTypes.startCounter());
//     },

//     reduceCounter: () => {
//       dispatch(actionTypes.reduceCounter());
//     },
//   };
// };

export default Counter;
