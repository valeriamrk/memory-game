import React from "react";
import { MyButton } from "../../../presentational";

const Win = (props) => {
  const { setStartGame, restartGame, turns } = props;

  return <div>
<h2>You win!</h2>
<h4>Your turns: {turns}</h4>
<MyButton clickButton={() => restartGame()}>Play again</MyButton>
<MyButton clickButton={() => setStartGame(false)}>Finish</MyButton>
  </div>;
};

export { Win };
