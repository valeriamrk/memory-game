import React from "react";
import "./InputField.scss";

const InputField = (props) => {
  const { setValue, ...other } = props;

  return (
    <input {...other} onChange={(event) => setValue(event.target.value)} />
  );
};

export { InputField };
