import React from "react";
import "./MyButton.scss";

const MyButton = (props) => {
  const {
    children,
    clickButton,
  } = props;
  const handleClick = () => {
    clickButton()
  };

  return <button {...props} onClick={() => handleClick()}>{children}</button>;
};

export { MyButton };
