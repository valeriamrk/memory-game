import React from "react";
import { MyButton } from "../../../presentational";
import "./Loose.scss";

const Loose = (props) => {
  const { setStartGame, restartGame, gameMode } = props;
  return (
    <div>
      <h2>You loose!</h2>
      {gameMode === 1 ? <h4>Your time is over!</h4> : <></>}
      {gameMode === 2 ? <h4>Your turns are over!</h4> : <></>}
      <MyButton clickButton={() => restartGame()}>Play again</MyButton>
      <MyButton clickButton={() => setStartGame(false)}>Finish</MyButton>
    </div>
  );
};

export { Loose };
