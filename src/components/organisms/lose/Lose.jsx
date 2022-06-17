import React from "react";
import { MyButton } from "../../../components";
import "./Lose.scss";

const Lose = (props) => {
  const { setStartGame, restartGame, gameMode } = props;
  return (
    <div>
      <h2>You lose!</h2>
      {gameMode === 1 ? <h4>Your time is over!</h4> : <></>}
      {gameMode === 2 ? <h4>Your turns are over!</h4> : <></>}
      <MyButton clickButton={() => restartGame()}>Play again</MyButton>
      <MyButton clickButton={() => setStartGame(false)}>Finish</MyButton>
    </div>
  );
};

export { Lose };
