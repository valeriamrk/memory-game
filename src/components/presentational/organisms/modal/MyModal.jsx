import React from "react";
import { Lose, Win } from "../../../presentational";
import "./MyModal.scss";

const MyModal = (props) => {
  const {
    modalActive,
    startGame,
    setStartGame,
    shuffleCards,
    restartGame,
    turns,
    backToWelcomePage,
    gameMode,
    gameLosed,
  } = props;

  return (
    <div
      className={modalActive ? "modal active" : "modal"}
      modalActive={modalActive}
    >
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        {gameLosed === true ? (
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
