import React from 'react';

const Buttons = ({ isRunning, onStart, onPause, onReset }) => {
  return (
    <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
      <button onClick={onStart} disabled={isRunning}>Iniciar</button>
      <button onClick={onPause} disabled={!isRunning}>Pausar</button>
      <button onClick={onReset}>Resetar</button>
    </div>
  );
};

export default Buttons;
