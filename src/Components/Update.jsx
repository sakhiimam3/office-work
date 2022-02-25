import React, { useRef } from "react";
import Fields from "./Fields";

const Update = () => {
  const data = useRef();
  const UpdatingInput = () => {
    return (data.current.value = "10000"), data.current.focus();
  };
  return (
    <>
      <Fields ref={data} />
      <button onClick={UpdatingInput} className="btn btn-success">
        Update Input
      </button>
    </>
  );
};

export default Update;
