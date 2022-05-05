import "./App.scss";
import React, { useState } from "react";
import { GamePage, WelcomePage } from "./components/presentational";
import { useDispatch } from "react-redux";
import { playerName, selectMode } from "./store/dataSlice";


function App() {

  const [nameValue, setNameValue] = useState("New Player");
  const [gameMode, setGameMode] = useState();
  const [startGame, setStartGame] = useState(false)

  const dispatch = useDispatch();


  const chooseMode = (id) => {
    setGameMode(id);
    console.log(id)
  };

  const handleButtonClick = () => {
    console.log("start")
    if (nameValue.length !== 0 && gameMode) {
      dispatch(playerName(nameValue));
      dispatch(selectMode(gameMode));
      setStartGame(!startGame)
    }
  };

  return (
    <div className="App">
      
      {startGame ? <GamePage nameValue={nameValue} startGame={startGame} setStartGame={setStartGame} chooseMode={chooseMode} gameMode={gameMode}/> : <WelcomePage nameValue={nameValue} setNameValue={setNameValue} chooseMode={chooseMode} gameMode={gameMode} handleButtonClick={handleButtonClick}/> }

    </div>
  );
}

export default App;
