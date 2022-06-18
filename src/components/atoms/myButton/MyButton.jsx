import React from "react";
import "./MyButton.scss";

const MyButton = (props) => {
  const {
    children,
    clickButton,
    isCardFlipDisabled,
    ...other
  } = props;
  const handleClick = () => {
    clickButton()
  };

  return <button {...other} onClick={() => handleClick()}>{children}</button>;
};

export { MyButton };
