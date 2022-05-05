import React, { useEffect } from "react";
import { Loose, MyModal } from "../../../presentational";
import { useCountdown } from "../../../../hooks/useCountdown";
import "./Countdown.scss";


const Countdown = (props) => {
  const {targetDate } = props

  const [minutes, seconds] = useCountdown(targetDate);
  

  if (minutes + seconds <= 0) {
    return <div>Time expired!</div>;
  } else {
    return (
      <div className="countdownWrapper">
        <div className="minutes">{minutes} :</div>
        <div className="seconds">{seconds}</div>
      </div>
    );
  }
};

export { Countdown };
