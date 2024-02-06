// import { useSelector } from "react-redux";

// const DisplayCounter = () => {
//   const {counterVal} = useSelector((store) => store.counter);
//   const privacy = useSelector((store) => store.privacy);
//   return (
//     <p className="lead mb-4">
//       {privacy ? (
//         <p>Counter is private!!!!</p>
//       ) : (
//         <p> Counter current value : {counterVal}</p>
//       )}
//     </p>
//   );
// };

// export default DisplayCounter;

import { useSelector } from "react-redux";

const DisplayCounter = () => {
  const { counterVal } = useSelector((store) => store.counter);
  const privacy = useSelector((store) => store.privacy);

  return (
    <div className="lead mb-4">
      {privacy ? (
        <p>Counter is private!!!!</p>
      ) : (
        <p>Counter current value: {counterVal}</p>
      )}
    </div>
  );
};

export default DisplayCounter;
