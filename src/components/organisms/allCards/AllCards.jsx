import React from "react";
import { SingleCard } from "../../../components";
import "./AllCards.scss";

const AllCards = (props) => {
  const {
    cards,
    handleCardChoice,
    isFirstCardSelected,
    isSecondCardSelected,
    isCardFlipDisabled,
  } = props;
  return (
    <div className="card-grid">
      {cards.map((card) => (
        <SingleCard
          key={card.id}
          card={card}
          handleCardChoice={handleCardChoice}
          flipped={
            card === isFirstCardSelected ||
            card === isSecondCardSelected ||
            card.matched
          }
          isCardFlipDisabled={isCardFlipDisabled}
        />
      ))}
    </div>
  );
};

export { AllCards };
