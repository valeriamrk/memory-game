import React from "react";
import { SingleCard } from "../../../presentational";
import "./AllCards.scss";

const AllCards = (props) => {
  const {
    cards,
    handleCardChoice,
    isFirstCardSelected,
    isSecondCardSelected,
    disabled,
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
          disabled={disabled}
        />
      ))}
    </div>
  );
};

export { AllCards };
