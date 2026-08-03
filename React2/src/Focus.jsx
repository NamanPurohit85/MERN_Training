import React from "react";
import { useRef, useState } from "react";

const Focus = () => {
  const [autoFocus, setAutoFocus] = useState(true);
  const inputRef = useRef(null);

  return (
    <div>
      <input ref={inputRef} placeholder="This is input" />
      <button onClick={() => inputRef.current.focus()}>Focus</button>
      <input type="text" autoFocus={autoFocus} />
    </div>
  );
};

export default Focus;
