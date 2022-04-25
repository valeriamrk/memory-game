import React from "react";
import { MyButton } from "../../../presentational";

const Win = () => {
  return <div>
<h2>You win!</h2>
<div>Your turns: 12</div>
<MyButton>Play again</MyButton>
<MyButton>Finish</MyButton>
  </div>;
};

export { Win };
