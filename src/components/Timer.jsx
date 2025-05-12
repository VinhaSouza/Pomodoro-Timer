import React, { useState, useEffect, useRef } from 'react';
import Controls from './Controls';

const Timer = ({ initialMinutes = 25 }) => {
  const [secondsLeft, setSecondsLeft] = useState(initialMinutes * 60);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  const formatTime = (secs) => {
    const minutes = String(Math.floor(secs / 60)).padStart(2, '0');
    const seconds = String(secs % 60).padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  const startTimer = () => {
    if (isRunning) return;
    setIsRunning(true);
    intervalRef.current = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev === 0) {
          clearInterval(intervalRef.current);
          setIsRunning(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const pauseTimer = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
  };

  const resetTimer = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
    setSecondsLeft(initialMinutes * 60);
  };

  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div>
      <h2>{formatTime(secondsLeft)}</h2>
      <Controls
        isRunning={isRunning}
        onStart={startTimer}
        onPause={pauseTimer}
        onReset={resetTimer}
      />
    </div>
  );
};

export default Timer;
