import React, { useEffect, useRef, useState } from "react";
import { useCountdown } from "../../../../hooks/useCountdown";
import "./Countdown.scss";

const Countdown2 = (props) => {
  const {setModalActive, setGameLoosed} = props
  const Ref = useRef(null);
  
  const [timer, setTimer] = useState('00:00');


  const getTimeRemaining = (e) => {
      const total = Date.parse(e) - Date.parse(new Date());
      const seconds = Math.floor((total / 1000) % 60);
      const minutes = Math.floor((total / 1000 / 60) % 60);
      const hours = Math.floor((total / 1000 * 60 * 60) % 24);
      return {
          total, hours, minutes, seconds
      };
  }


  const startTimer = (e) => {
      let { total, minutes, seconds } 
                  = getTimeRemaining(e);
      if (total >= 0) {
          setTimer(
              (minutes > 9 ? minutes : '0' + minutes) + ' : '
              + (seconds > 9 ? seconds : '0' + seconds)
          )
      }
  }


  const clearTimer = (e) => {
      setTimer('00:10');
      if (Ref.current) clearInterval(Ref.current);
      const id = setInterval(() => {
          startTimer(e);
      }, 1000)
      Ref.current = id; 
  }

  const getDeadTime = () => {
      let deadline = new Date();
      deadline.setSeconds(deadline.getSeconds() + 10);

      return deadline;
  }

  useEffect(() => {
      clearTimer(getDeadTime());
      setModalActive(true);
      setGameLoosed(true);  
  }, []);

  // const onClickReset = () => {
  //     clearTimer(getDeadTime());
  // }


  return (
    <div className="countdownWrapper">
      <div className="minutes">{timer}</div>
      {/* <div className="seconds">{seconds}</div> */}
      {/* <div>{elapsedTime}</div> */}
    </div>
  );
};

export { Countdown2 };
