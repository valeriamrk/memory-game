import React, { useState } from "react";
import { InputField, MyButton, GameMode } from "../../../presentational";
import { GamePage } from "../gamePage/GamePage";
import { useDispatch, useSelector } from "react-redux";

import "./WelcomePage.scss";
import { selectMode, playerName } from "../../../../store/dataSlice";

const WelcomePage = (props) => {
  const { nameValue, setNameValue, chooseMode, gameMode, handleButtonClick } =
    props;
  // const [nameValue, setNameValue] = useState("New Player");
  // const [gameMode, setGameMode] = useState();

  // const dispatch = useDispatch();

  // const chooseMode = (id) => {
  //   setGameMode(id);
  //   console.log(id)
  // };

  // const handleButtonClick = () => {
  //   console.log("kjgk")
  //   if (nameValue.length !== 0 && gameMode) {
  //     dispatch(playerName(nameValue));
  //     dispatch(selectMode(gameMode));
  //   }
  // };

  return (
    <div className="welcomeWrapper">
      <div className="title">Welcome to Magic Match!</div>
      <div className="description">
        Magic Match it&apos;s a memory game where you need to match pairs by
        turn over 2 cards at a time.
      </div>
      <div className="userOptions">Enter your name</div>
      <InputField value={nameValue} setValue={setNameValue} />
      <div className="userOptions">Choose game mode</div>
      <GameMode chooseMode={chooseMode} />
      <MyButton
        disabled={nameValue.length === 0 || gameMode === undefined}
        clickButton={handleButtonClick}
      >
        Start game
      </MyButton>
    </div>
  );
};

export { WelcomePage };
