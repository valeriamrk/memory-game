import React from "react";
import { SingleCard } from "../../../presentational";
import "./AllCards.scss";


const AllCards = (props) => {
  const {cards, handleChoice, choiceOne, choiceTwo, disabled} = props
  return (
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
  );
};

export { AllCards };
