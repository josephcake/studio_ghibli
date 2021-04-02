import React, { useState } from "react";
import { connect } from "react-redux";

const Counter = ({ count, dispatch }) => {
  const increment = () => {
    // setCounter(counter +)
    dispatch({ type: "INCREMENT" });
  };

  const decrement = () => {
    dispatch({ type: "DECREMENT" });
  };
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  count: state.count,
});
export default connect(mapStateToProps)(Counter);
