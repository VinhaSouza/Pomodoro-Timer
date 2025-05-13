import React, { useState, useEffect, useRef } from 'react';
import Buttons from './Buttons';
import CycleIndicator from './CycleIndicator';

const Timer = () => {
  const WORK_DURATION = 25 * 60;
  const SHORT_BREAK = 5 * 60;
  const LONG_BREAK = 30 * 60;
  const TOTAL_CYCLES = 4;

  const [secondsLeft, setSecondsLeft] = useState(WORK_DURATION);
  const [isRunning, setIsRunning] = useState(false);
  const [mode, setMode] = useState('work');
  const [completedCycles, setCompletedCycles] = useState(0);

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
          handleCycleEnd();
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
    setMode('work');
    setSecondsLeft(WORK_DURATION);
    setCompletedCycles(0);
  };

  const handleCycleEnd = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);

    if (mode === 'work') {
      const nextCycle = completedCycles + 1;
      setCompletedCycles(nextCycle);

      if (nextCycle % TOTAL_CYCLES === 0) {
        setMode('long-break');
        setSecondsLeft(LONG_BREAK);
      } else {
        setMode('short-break');
        setSecondsLeft(SHORT_BREAK);
      }
    } else {
      setMode('work');
      setSecondsLeft(WORK_DURATION);
    }
  };

  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>{mode === 'work' ? 'Tempo de Foco' : mode === 'short-break' ? 'Descanso' : 'Descanso Longo'}</h2>
      <h1>{formatTime(secondsLeft)}</h1>

      <Buttons
        isRunning={isRunning}
        onStart={startTimer}
        onPause={pauseTimer}
        onReset={resetTimer}
      />

      <CycleIndicator completedCycles={completedCycles % TOTAL_CYCLES} totalCycles={TOTAL_CYCLES} />
    </div>
  );
};

export default Timer;

