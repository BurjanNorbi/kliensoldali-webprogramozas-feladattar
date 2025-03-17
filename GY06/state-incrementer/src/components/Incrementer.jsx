import { useState } from "react";

const Incrementer = () => {
  const [count, setCount] = useState(0);

  const handleIncrementTwiceClick = () => {
    setCount(count + 1);
    setCount(count + 1);
  };

  return (
    <>
      <span>Érték: {count}</span>
      <button onClick={handleIncrementTwiceClick}>+2</button>
    </>
  );
};

export default Incrementer;
