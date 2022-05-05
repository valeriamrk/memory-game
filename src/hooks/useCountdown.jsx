import { useEffect, useState } from 'react';

const useCountdown = (targetDate) => {
  const countDownDate = new Date(targetDate).getTime();

  const [countDown, setCountDown] = useState(
    countDownDate - new Date().getTime()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(countDownDate - new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [countDownDate]);

  return getReturnValues(countDown);
};

function getZero(num) {
  if (num >=0 && num < 10 ) {
    return `0${num}`
  } else {
    return num
  }
}

const getReturnValues = (countDown) => {
  // calculate time left
  // const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
  // const hours = Math.floor(
  //   (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  // );
  const minutes = getZero(Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60)));
  const seconds = getZero(Math.floor((countDown % (1000 * 60)) / 1000));

  return [minutes, seconds];
};

export { useCountdown };
