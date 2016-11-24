import React from 'react';

export const Counter = (props) => (
  <div className="counter-view">
    <h2 className="counter-view-title">Counter: {props.counter}</h2>
    <div className="counter-view-group">
      <button className="btn" onClick={props.increment}>
        Increment
      </button>
      <button className="btn btn-blue" onClick={props.doubleAsync}>
        Double (Async)
      </button>
      <button className="btn btn-green" onClick={props.increment}>
        Increment
      </button>
      <button className="btn btn-red" onClick={props.doubleAsync}>
        Double (Async)
      </button>
    </div>
    <button className="btn-large btn-green" onClick={props.increment}>
      Button Large, Increment
    </button>
    <button className="btn-large btn-red" onClick={props.doubleAsync}>
      Button Large, Double (Async)
    </button>
    <button className="btn-large btn-blue" onClick={props.reset}>
      Button Large, Reset
    </button>
  </div>
);

Counter.propTypes = {
  counter: React.PropTypes.number.isRequired,
  doubleAsync: React.PropTypes.func.isRequired,
  increment: React.PropTypes.func.isRequired,
  reset: React.PropTypes.func.isRequired,
};

export default Counter;
