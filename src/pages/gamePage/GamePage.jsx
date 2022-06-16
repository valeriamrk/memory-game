import React, { useEffect, useState } from "react";
import {
  Countdown,
  MyModal,
  SingleCard,
} from "../../components/presentational";
import "animate.css";

import "./GamePage.scss";

const cardImages = [
  { src: "/img/book.png", matched: false },
  { src: "/img/bunny.png", matched: false },
  { src: "/img/hat.png", matched: false },
  { src: "/img/magic-ball.png", matched: false },
  { src: "/img/rainbow-castle.png", matched: false },
  { src: "/img/smoke.png", matched: false },
];

const GamePage = (props) => {
  const {
    nameValue,
    startGame,
    setStartGame,
    gameMode,
    setNameValue,
    setGameMode,
  } = props;
  const [cards, setCards] = useState();
  const [turns, setTurns] = useState(0);
  const [isFirstCardSelected, setisFirstCardSelected] = useState(null);
  const [isSecondCardSelected, setisSecondCardSelected] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [modalActive, setModalActive] = useState(false);
  const [gameLoosed, setGameLoosed] = useState(false);
  const [pauseTimer, setPauseTimer] = useState(false);
  const [resetTimer, setResetTimer] = useState(false);

  // shuffle cards
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
    setCards(shuffledCards);
  };

  const startNewGame = () => {
    shuffleCards();
    setisFirstCardSelected(null);
    setisSecondCardSelected(null);
    setTurns(0);
    setModalActive(false);
  };

  const restartGame = () => {
    startNewGame();
    setResetTimer(true);
    setTimeout(() => setResetTimer(false), 0);
  };

  const backToWelcomePage = () => {
    setModalActive(false);
    setStartGame(false);
    setGameMode();
    setNameValue("New Player");
  };

  //handle a choice
  const handleCardChoice = (card) => {
    isFirstCardSelected
      ? setisSecondCardSelected(card)
      : setisFirstCardSelected(card);
  };

  // win
  const isGameFinished = () => {
    const allCardsMatched = cards?.every((element) => element.matched === true);
    if (allCardsMatched === true) {
      setTimeout(() => setModalActive(true), 500);
      setPauseTimer(true);
      setGameLoosed(false);
      // clearTimer();
    }
  };
  // start a new game automatically
  useEffect(() => {
    startNewGame();
  }, []);

  // compare 2 selected cards
  useEffect(() => {
    if (isFirstCardSelected && isSecondCardSelected) {
      setDisabled(true);
      if (isFirstCardSelected.src === isSecondCardSelected.src) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.src === isFirstCardSelected.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        resetTurn();
      } else {
        setTimeout(() => resetTurn(), 1000);
      }
    }
  }, [isFirstCardSelected, isSecondCardSelected]);

  useEffect(() => {
    isGameFinished();
  }, [cards]);

  // loose
  const gameLooseByTurns = () => {
    if (gameMode === 2 && turns >= 20) {
      setGameLoosed(true);
      setTimeout(() => setModalActive(true), 500);
    }
  };
  const gameLooseByTime = () => {
    setTimeout(() => setModalActive(true), 500);
    setGameLoosed(true);
  };

  useEffect(() => {
    gameLooseByTurns();
  });

  // reset choices & increase turn
  const resetTurn = () => {
    setisFirstCardSelected(null);
    setisSecondCardSelected(null);
    setTurns((prevTurns) => prevTurns + 1);
    setDisabled(false);
  };

  return (
    <div className="App">
      <MyModal
        modalActive={modalActive}
        setModalActive={setModalActive}
        startGame={startGame}
        setStartGame={setStartGame}
        shuffleCards={shuffleCards}
        restartGame={restartGame}
        turns={turns}
        backToWelcomePage={backToWelcomePage}
        gameMode={gameMode}
        gameLoosed={gameLoosed}
      />

      <h2>Hi, {nameValue}</h2>
      <button onClick={restartGame}>Restart game</button>
      <button onClick={backToWelcomePage}>Exit</button>

      {gameMode === 1 ? (
        <Countdown
          pause={pauseTimer}
          reset={resetTimer}
          finishTimerHandler={gameLooseByTime}
        />
      ) : (
        <div></div>
      )}
      {gameMode === 2 ? <p>Turns: {turns}/20</p> : <></>}

      {gameMode === 3 ? <p>Turns: {turns}</p> : <></>}

      <div className={"card-grid"}>
        {cards?.map((card) => (
          <SingleCard
            key={card.id}
            card={card}
            handleCardChoice={handleCardChoice}
            flipped={
              card === isFirstCardSelected ||
              card === isSecondCardSelected ||
              card.matched
            }
            disabled={disabled}
          />
        ))}
      </div>
    </div>
  );
};

export default GamePage;
