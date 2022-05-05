import React from "react";
import { MyButton } from "../../../presentational";
import "./Loose.scss";

const Loose = (props) => {
  const { setStartGame, restartGame } = props;
  return (
    <div>
      <h2>You loose!</h2>
      <h4>Your turns: 12</h4>
      <MyButton clickButton={() => restartGame()}>Play again</MyButton>
      <MyButton clickButton={() => setStartGame(false)}>Finish</MyButton>
    </div>
  );
};

export { Loose };
