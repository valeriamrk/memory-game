import React, { useEffect } from "react";
import { Loose, MyModal } from "../../../presentational";
import { useCountdown } from "../../../../hooks/useCountdown";
import "./Countdown.scss";


const Countdown = (props) => {
  const {targetDate, setModalActive } = props

  const [minutes, seconds] = useCountdown(targetDate);
  
  useEffect(() => {
    if (minutes + seconds <= 0) {
    setModalActive(true)
  }});

    return (
      <div className="countdownWrapper">
        <div className="minutes">{minutes} :</div>
        <div className="seconds">{seconds}</div>
      </div>
    );
  }

export { Countdown };
