import React, { useState } from "react";

const Greeting = () => {
  const [buttonClick, setButtonClick] = useState(false);

  return (
    <div>
      {buttonClick && <p>Button is Clicked</p>}{" "}
      {!buttonClick && <p>Button Not Click</p>}
      <button
        onClick={() => {
          setButtonClick(true);
        }}
      >
        Click
      </button>
    </div>
  );
};

export default Greeting;
