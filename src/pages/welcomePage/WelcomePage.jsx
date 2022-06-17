import React from "react";
import {
  InputField,
  MyButton,
  GameMode,
} from "../../components";
import "./WelcomePage.scss";

const WelcomePage = (props) => {
  const { nameValue, setNameValue, chooseMode, gameMode, handleButtonClick } =
    props;

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
      <GameMode chooseMode={chooseMode} gameMode={gameMode} />
      <MyButton
        isCardFlipDisabled={nameValue.length === 0 || gameMode === undefined}
        clickButton={handleButtonClick}
      >
        Start game
      </MyButton>
    </div>
  );
};

export { WelcomePage };
