import React from "react";
import { useSelector } from "react-redux";
import "./GameMode.scss";

const GameMode = (props) => {
  const { chooseMode } = props;
  const gameModes = [
    { id: 1, label: "byTime", name: "By time", checked: false },
    { id: 2, label: "byTurns", name: "By turns", checked: false },
    { id: 3, label: "unlimited", name: "No limits", checked: false },
  ];

  const handleClick = (id) => {
    chooseMode(id);
    console.log(id);
  };

  return (
    <div className="container">
      {gameModes.map((element) => (
        <div className="label" onClick={() => handleClick(element.id)}>
          {element.name}
        </div>
      ))}
    </div>
  );
};

export { GameMode };