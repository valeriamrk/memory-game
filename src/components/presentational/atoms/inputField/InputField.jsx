import React from "react";
import "./InputField.scss";


const InputField = (props) => {
const {value, setValue} = props



  return (
      <input {...props} onChange={(event) => setValue(event.target.value)}  />
  );
};

export { InputField };
