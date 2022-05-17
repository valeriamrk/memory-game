import React, { useEffect, useState } from "react";
import { Countdown, MyModal, Countdown2 } from "../../../presentational";
import { SingleCard } from "../../organisms/singleCard/SingleCard";
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
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);
  // const expiringTime = new Date().getTime() + 6 * 1000;
  const [modalActive, setModalActive] = useState(false);
  const [gameLoosed, setGameLoosed] = useState(false);

  // shuffle cards
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setChoiceOne(null);
    setChoiceTwo(null);
    setCards(shuffledCards);
    setTurns(0);
    setModalActive(false);
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
    if (gameMode === 2 && turns >= 20) {
      console.log("loose turns");
      setModalActive(true);
      setGameLoosed(true);
      console.log(gameLoosed, "sjsdjsk");
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
    setGameMode();
    setNameValue("New Player");
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
      <button onClick={shuffleCards}>Start new game</button>
      <button onClick={() => setModalActive(true)}>Modal open</button>

      {gameMode === 1 ? (
        // <Countdown
        //   targetDate={expiringTime}
        //   startGame={startGame}
        //   shuffleCards={shuffleCards}
        //   setStartGame={setStartGame}
        //   restartGame={restartGame}
        //   setModalActive={setModalActive}
        //   setGameLoosed={setGameLoosed}
        // />
        <Countdown2
        setModalActive={setModalActive}
        setGameLoosed={setGameLoosed}
        />
      ) : (
        <div></div>
      )}
      {gameMode === 2 ? <p>Turns: {turns}/20</p> : <></>}

      {gameMode === 3 ? <p>Turns: {turns}</p> : <></>}

      <div className={`card-grid`}>
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
