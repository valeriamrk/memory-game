import React from "react";
import { Loose, Win } from "../../../presentational";
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
    gameLoosed,
  } = props;

  return (
    <div
      className={modalActive ? "modal active" : "modal"}
      modalActive={modalActive}
    >
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        {gameLoosed === true ? (
          <Loose
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
