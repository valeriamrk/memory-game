import React from "react";
import { useSelector } from "react-redux";
import "./GameMode.scss";

const GameMode = (props) => {

  const {chooseMode} = props

  const modes = useSelector(
    (state) => state.gameData.gameMode
  );

  const handleClick = (id) => {
    chooseMode(id)
    console.log(id);
  };

  return <div className="container">
    {modes.map((element) => (
      <div className="label" onClick={()=> handleClick(element.id)}>{element.name}</div>
    ))}
  </div>;
};

export { GameMode };
