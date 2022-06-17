import React from "react";
import { Lose, Win } from "../../../components";
import "./MyModal.scss";

const MyModal = (props) => {
  const {
    isModalActive,
    startGame,
    setStartGame,
    shuffleCards,
    restartGame,
    turns,
    backToWelcomePage,
    gameMode,
    isGameLosed,
  } = props;

  return (
    <div
      className={isModalActive ? "modal active" : "modal"}
      isModalActive={isModalActive}
    >
      <div className="modalContent" onClick={(e) => e.stopPropagation()}>
        {isGameLosed === true ? (
          <Lose
            startGame={startGame}
            shuffleCards={shuffleCards}
            setStartGame={setStartGame}
            restartGame={restartGame}
            turns={turns}
            backToWelcomePage={backToWelcomePage}
            gameMode={gameMode}
          />
        ) : (
          <Win
            startGame={startGame}
            shuffleCards={shuffleCards}
            setStartGame={setStartGame}
            restartGame={restartGame}
            turns={turns}
            backToWelcomePage={backToWelcomePage}
            gameMode={gameMode}
          />
        )}
      </div>
    </div>
  );
};

export { MyModal };
