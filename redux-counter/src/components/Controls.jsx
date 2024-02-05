import { useDispatch } from "react-redux";
import { useRef } from "react";
const Controls = () => {
  const dispatch = useDispatch();
  const inputElement = useRef();
  const handleDecrement = () => {
    dispatch({
      type: "DECREMENT",
    });
  };

  const handleIncrement = () => {
    dispatch({
      type: "INCREMENT",
    });
  };

  const handleAddition = () => {
    dispatch({
      type: "ADDITION",
      payload: inputElement.current.value,
    });

    inputElement.current.value = "";
  };

  const handleSubstraction = () => {
    dispatch({
      type: "SUBSTRACTION",
      payload: inputElement.current.value,
    });

    inputElement.current.value = "";
  };

  const handleToggle = () => {
    dispatch({
      type: "TOGGLE",
    });
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
