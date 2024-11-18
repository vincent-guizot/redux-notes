import React, { useContext } from "react";

import BasicContext from "../contexts/BasicContext";

function BasicComponent() {
  const { count, setCount } = useContext(BasicContext);

  const addHandler = () => {
    setCount((count) => count + 1);
    console.log("Add Handler");
  };

  const subHandler = () => {
    setCount((count) => count - 1);
    console.log("Sub Handler");
  };

  return (
    <div>
      {JSON.stringify(count)}
      <button onClick={() => addHandler()}>Tambah</button>
      <button onClick={() => subHandler()}>Kurang </button>
    </div>
  );
}

export default BasicComponent;
