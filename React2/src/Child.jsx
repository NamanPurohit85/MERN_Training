import React, { useMemo } from "react";

const Child = ({ number, price}) => {
  const square = useMemo(() => {
    console.log("calculating");
    return number * number;
  }, [number]);
  console.log("Component Render");

  const Sum = useMemo(() => {
    return price.reduce((sum, currentPrice) => sum + currentPrice, 0);
  }, [price]);

  return (
    <>
      <h2>Child Component</h2>
      <p>Number: {number}</p>
      <p>Square: {square}</p>
      <h3>Sum of Prices: {Sum}</h3>
    </>
  );
};

export default Child;
