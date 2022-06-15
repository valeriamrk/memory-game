import "./App.scss";
import React, { useState } from "react";
import { GamePage, WelcomePage } from "./components/presentational";

function App() {
  const [nameValue, setNameValue] = useState("New Player");
  const [gameMode, setGameMode] = useState();
  const [startGame, setStartGame] = useState(false);

  const chooseMode = (id) => {
    setGameMode(id);
    console.log(id);
  };

  const handleButtonClick = () => {
    console.log("start");
    if (nameValue.length !== 0 && gameMode) {
      setStartGame(!startGame);
    }
  };

  return (
    <div className="App">
      {startGame ? (
        <GamePage
          nameValue={nameValue}
          startGame={startGame}
          setStartGame={setStartGame}
          chooseMode={chooseMode}
          gameMode={gameMode}
          setNameValue={setNameValue}
          setGameMode={setGameMode}
        />
      ) : (
        <WelcomePage
          nameValue={nameValue}
          setNameValue={setNameValue}
          chooseMode={chooseMode}
          gameMode={gameMode}
          handleButtonClick={handleButtonClick}
        />
      )}
    </div>
  );
}

export default App;
