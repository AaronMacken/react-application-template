import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleSetCount = (isIncrement: boolean = true) => {
    setCount((prevState) => {
      if (!isIncrement) {
        const newCount = prevState - 1;

        return newCount < 0 ? 0 : newCount;
      }

      return prevState + 1;
    });
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <>
      <span>Count: {count} </span>
      <button type="button" onClick={() => handleSetCount()}>
        Increment
      </button>
      <button type="button" onClick={() => handleSetCount(false)}>
        Decrement
      </button>
      <button type="button" onClick={handleReset}>
        Reset
      </button>
    </>
  );
};

export default Counter;
