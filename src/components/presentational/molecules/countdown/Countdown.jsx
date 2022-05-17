import React, { useEffect } from "react";
import { useCountdown } from "../../../../hooks/useCountdown";
import "./Countdown.scss";

const Countdown = (props) => {
  const { targetDate, setModalActive, setGameLoosed } = props;

  const [minutes, seconds] = useCountdown(targetDate);
  const elapsedTime = (60) - (minutes + seconds)
  // console.log(elapsedTime)

  useEffect(() => {
    if (minutes + seconds <= 0) {
      setModalActive(true);
      setGameLoosed(true);  

    }
  });

  return (
    <div className="countdownWrapper">
      <div className="minutes">{minutes} :</div>
      <div className="seconds">{seconds}</div>
      <div>{elapsedTime}</div>
    </div>
  );
};

export { Countdown };
