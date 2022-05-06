import React, { useEffect, useState } from "react";
import { useCountdown } from "../../../../hooks/useCountdown";
import {
  Countdown,
  MyModal,
  Win,
  Loose,
  AllCards,
} from "../../../presentational";
import { SingleCard } from "../../organisms/singleCard/SingleCard";

const cardImages = [
  { src: "/img/book.png", matched: false },
  { src: "/img/bunny.png", matched: false },
  { src: "/img/hat.png", matched: false },
  { src: "/img/magic-ball.png", matched: false },
  { src: "/img/rainbow-castle.png", matched: false },
  { src: "/img/smoke.png", matched: false },
];

const modals = [
  { id: 1, label: "win", opened: false },
  { id: 2, label: "loose", opened: false },
];

const GamePage = (props) => {
  const {
    nameValue,
    startGame,
    setStartGame,
    chooseMode,
    gameMode,
    setNameValue,
  } = props;
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const expiringTime = new Date().getTime() + 10 * 1000;

  const [modalActive, setModalActive] = useState(false);

  // shuffle cards
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setChoiceOne(null);
    setChoiceTwo(null);
    setCards(shuffledCards);
    setTurns(0);
  };

  //handle a choice
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  // compare 2 selected cards
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.src === choiceTwo.src) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.src === choiceOne.src) {
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
  }, [choiceOne, choiceTwo]);

  // win
  const isGameFinished = () => {
    const test = cards.every((element) => element.matched === true);
    console.log(`element matched ${test}`);
    if (test === true) {
      console.log("finishgame");
      setModalActive(true);
    }
  };

  useEffect(() => {
    isGameFinished();
  });

  // loose
  const isGameLoose = () => {
    if (gameMode === 2 && turns >= 2) {
      console.log("loose turns");
      setModalActive(true);
    }
  };

  useEffect(() => {
    isGameLoose();
  });

  // reset choices & increase turn
  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
    setDisabled(false);
  };

  // start a new game automatically
  useEffect(() => {
    shuffleCards();
  }, []);

  const restartGame = () => {
    shuffleCards();
    setModalActive(false);
  };

  const backToWelcomePage = () => {
    setModalActive(false);
    setStartGame(false);
  };

  return (
    <div className="App">
      <MyModal
        modalActive={modalActive}
        setModalActive={setModalActive}
        startGame={startGame}
        setStartGame={setStartGame}
      >
        <Win
          startGame={startGame}
          shuffleCards={shuffleCards}
          setStartGame={setStartGame}
          restartGame={restartGame}
          turns={turns}
          backToWelcomePage={backToWelcomePage}
          gameMode={gameMode}
        />
      </MyModal>
      {/* <MyModal
        startGame={startGame}
        setStartGame={setStartGame}
        modalActive={modalActive}
        setModalActive={setModalActive}
      >
        <Loose
          startGame={startGame}
          shuffleCards={shuffleCards}
          setStartGame={setStartGame}
          restartGame={restartGame}
          turns={turns}
          backToWelcomePage={backToWelcomePage}
          gameMode={gameMode}
        />
      </MyModal> */}
      <h2>Hi, {nameValue}</h2>
      <button onClick={shuffleCards}>Start new game</button>
      <button onClick={() => setModalActive(true)}>Modal open</button>

      {gameMode === 1 ? (
        <Countdown
          targetDate={expiringTime}
          startGame={startGame}
          shuffleCards={shuffleCards}
          setStartGame={setStartGame}
          restartGame={restartGame}
          setModalActive={setModalActive}
        />
      ) : (
        <div></div>
      )}
      {gameMode === 2 ? <p>Turns: {turns}/20</p> : <></>}

      {gameMode === 3 ? <p>Turns: {turns}</p> : <></>}

      {/* <AllCards cards={cards} handleChoice={handleChoice} choiceOne={choiceOne} choiceTwo={choiceTwo} disabled={disabled}/> */}
      <div className="card-grid">
        {cards.map((card) => (
          <SingleCard
            key={card.id}
            card={card}
            handleChoice={handleChoice}
            flipped={card === choiceOne || card === choiceTwo || card.matched}
            disabled={disabled}
          />
        ))}
      </div>
    </div>
  );
};

export { GamePage };
