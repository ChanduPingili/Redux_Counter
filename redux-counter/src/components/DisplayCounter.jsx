import { useSelector } from "react-redux";

const DisplayCounter = () => {
  const counter = useSelector((store) => store.counter);
  const privacy = useSelector((store) => store.privacy);
  return (
    <p className="lead mb-4">
      {privacy ? (
        <p>Counter is private!!!!</p>
      ) : (
        <p> Counter current value : {counter}</p>
      )}
    </p>
  );
};

export default DisplayCounter;
