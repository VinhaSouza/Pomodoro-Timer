import React from 'react';
import tomato from '../assets/tomato.png';

const CycleIndicator = ({ completedCycles, totalCycles = 4 }) => {
  const indicators = [];

  for (let i = 0; i < totalCycles; i++) {
    const isActive = i < completedCycles;
    indicators.push(
      <img
        key={i}
        src={tomato}
        alt="tomato"
        style={{
          width: '32px',
          height: '32px',
          marginRight: '8px',
          filter: isActive ? 'none' : 'grayscale(100%) brightness(70%)',
          transition: 'filter 0.3s ease',
        }}
      />
    );
  }

  return (
    <div style={{ marginTop: '1rem', textAlign: 'center' }}>
      <strong>Ciclos completos:</strong>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '8px' }}>
        {indicators}
      </div>
    </div>
  );
};

export default CycleIndicator;
