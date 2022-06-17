import React from "react";
import "./GameMode.scss";

const GameMode = (props) => {
  const { chooseMode, gameMode } = props;

  const gameModes = [
    { id: 1, label: "byTime", name: "By time", checked: false },
    { id: 2, label: "byTurns", name: "By turns", checked: false },
    { id: 3, label: "unlimited", name: "No limits", checked: false },
  ];

  const handleClick = (id) => {
    chooseMode(id);
  };

  return (
    <div className="container">
      {gameModes.map((element) => (
        <div
          key={element.id}
          className={gameMode === element.id ? "label active" : "label"}
          onClick={() => handleClick(element.id)}
        >
          {element.name}
        </div>
      ))}
    </div>
  );
};

export { GameMode };
