import "./App.scss";
import React, { useState } from "react";
import { GamePage, WelcomePage } from "./pages";

function App() {
  const [nameValue, setNameValue] = useState("New Player");
  const [gameMode, setGameMode] = useState();
  const [isGameStarted, setIsGameStarted] = useState(false);

  const chooseMode = (id) => {
    setGameMode(id);
  };

  const handleButtonClick = () => {
    if (nameValue.length !== 0 && gameMode) {
      setIsGameStarted(!isGameStarted);
    }
  };

  return (
    <div className="App">
      {isGameStarted ? (
        <GamePage
          nameValue={nameValue}
          startGame={isGameStarted}
          setStartGame={setIsGameStarted}
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
