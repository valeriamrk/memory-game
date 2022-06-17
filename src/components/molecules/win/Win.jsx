import React from "react";
import { MyButton } from "../..";

const Win = (props) => {
  const { restartGame, turns, backToWelcomePage, gameMode } = props;

  return (
    <div>
      <h2>You win!</h2>
      {gameMode === 1 ? <h4>Excellent!</h4> : <></>}
      {/* {gameMode === 1 ? <h4>Elapsed time: 111</h4> : <></>} */}
      {gameMode === 2 || gameMode === 3 ? <h4>Your turns: {turns}</h4> : <></>}
      <MyButton clickButton={() => restartGame()}>Play again</MyButton>
      <MyButton clickButton={() => backToWelcomePage()}>Finish</MyButton>
    </div>
  );
};

export { Win };
