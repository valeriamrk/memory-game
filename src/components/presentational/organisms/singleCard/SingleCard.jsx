import React from "react";
import "./SingleCard.scss";

const SingleCard = (props) => {
  const { card, handleCardChoice, flipped, disabled } = props;
  const handleClick = () => {
    if (!disabled) {
      handleCardChoice(card);
    }
  };

  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img className="front" src={card.src} alt="card front" />
        <img
          className="back"
          src="/img/cover.jpg"
          onClick={handleClick}
          alt="card back"
        />
      </div>
    </div>
  );
};

export { SingleCard };
