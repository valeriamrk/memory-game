import React, { useEffect, useState } from "react";
import "./Countdown.scss";

const Countdown = (props) => {
  const {
    start,
    reset = false,
    pause = false,
    remainingTime = 60,
    finishTimerHandler,
  } = props;

  const getDeadlineTime = (time) => {
    let deadline = new Date();
    deadline.setSeconds(deadline.getSeconds() + time);
    return deadline;
  };

  const [timer, setTimer] = useState("01 : 00");
  const [intervalID, setIntervalID] = useState(null);
  const deadlineTime = getDeadlineTime(remainingTime);
  const hasTimerEnded = timer === "00 : 00";
  const isTimerRunning = intervalID != null;

  const getTimeRemaining = (deadline) => {
    const total = Date.parse(deadline) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor(((total / 1000) * 60 * 60) % 24);
    return {
      total,
      hours,
      minutes,
      seconds,
    };
  };

  const startTimer = () => {
    if (!hasTimerEnded && !isTimerRunning) {
      setIntervalID(setInterval(updateTimer, 1000));
    }
  };

  const isPauseTimer = () => {
    if (pause) {
      clearInterval(intervalID);
      setIntervalID(null);
    }
  };

  const isResetTimer = () => {
    if (reset) {
      clearInterval(intervalID);
      setIntervalID(setInterval(updateTimer, 1000));
      setTimer("01 : 00");
    }
  };

  const updateTimer = () => {
    let { total, minutes, seconds } = getTimeRemaining(deadlineTime);
    if (total >= 0) {
      setTimer(
        (minutes > 9 ? minutes : "0" + minutes) +
          " : " +
          (seconds > 9 ? seconds : "0" + seconds)
      );
    } else {
      setTimer("00 : 00");
    }
  };

  // start timer
  useEffect(() => {
    startTimer();
  }, []);

  // clear interval when the timer ends
  useEffect(() => {
    if (hasTimerEnded) {
      clearInterval(intervalID);
      setIntervalID(null);
      finishTimerHandler();
    }
  }, [hasTimerEnded]);

  // clear interval when component unmounts
  useEffect(
    () => () => {
      clearInterval(intervalID);
    },
    []
  );

  // pause timer
  useEffect(() => {
    isPauseTimer();
  }, [pause]);

  //reset timer
  useEffect(() => {
    isResetTimer();
  }, [reset]);

  return (
    <div className="countdownWrapper">
      <div className="minutes">{timer}</div>
    </div>
  );
};

export { Countdown };
