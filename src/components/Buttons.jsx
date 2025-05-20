import React from 'react';

const Buttons = ({ isRunning, cycleFinished, onStart, onPause, onReset }) => {
  return (
    <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
      <button onClick={onStart} disabled={isRunning || cycleFinished}>Iniciar</button>
      <button onClick={onPause} disabled={!isRunning || cycleFinished}>Pausar</button>
      <button onClick={onReset}>Resetar</button>
    </div>
  );
};

export default Buttons;
