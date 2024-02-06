import { useDispatch } from "react-redux";
import { useRef } from "react";
import { counterActions, privacyActions } from "../store/counter-store";
const Controls = () => {
  const dispatch = useDispatch();
  const inputElement = useRef();
  const handleDecrement = () => {
    dispatch(counterActions.decrement());
  };

  const handleIncrement = () => {
    dispatch(counterActions.increment());
  };

  const handleAddition = () => {
    dispatch(counterActions.add(inputElement.current.value));
    inputElement.current.value = "";
  };

  const handleSubstraction = () => {
    dispatch(counterActions.subtract(inputElement.current.value));
    inputElement.current.value = "";
  };

  const handleToggle = () => {
    dispatch(privacyActions.toggle());
  };
  return (
    <center>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center controls">
        <button
          type="button"
          className="btn btn-primary btn-lg px-4 gap-3 control-btn"
          onClick={handleIncrement}>
          Increment
        </button>
        <button
          type="button"
          className="btn btn-outline-secondary btn-lg px-4 control-btn"
          onClick={handleDecrement}>
          Decrement
        </button>
        <button
          type="button"
          className="btn btn-warning btn-lg px-4 control-btn privacy-btn"
          onClick={handleToggle}>
          Toggle Privacy
        </button>
      </div>

      <div>
        <input
          type="text"
          placeholder="Enter the value"
          ref={inputElement}></input>
        <button
          type="button"
          className="btn btn-success control-btn"
          onClick={handleAddition}>
          Add
        </button>
        <button
          type="button"
          className="btn btn-danger control-btn"
          onClick={handleSubstraction}>
          Substract
        </button>
      </div>
    </center>
  );
};

export default Controls;
