import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Buttons from '../../components/Buttons';

describe('Componente Buttons', () => {
  it('renderiza os botões Iniciar, Pausar e Resetar', () => {
    render(<Buttons isRunning={false} onStart={() => {}} onPause={() => {}} onReset={() => {}} />);

    const iniciarBtn = screen.queryByText('Iniciar');
    const pausarBtn = screen.queryByText('Pausar');
    const resetarBtn = screen.queryByText('Resetar');

    expect(iniciarBtn).not.toBeNull();
    expect(pausarBtn).not.toBeNull();
    expect(resetarBtn).not.toBeNull();
  });

  it('desativa o botão Iniciar quando isRunning é true', () => {
    render(<Buttons isRunning={true} onStart={() => {}} onPause={() => {}} onReset={() => {}} />);
    const iniciarBtn = screen.getByText('Iniciar');
    const pausarBtn = screen.getByText('Pausar');

    expect(iniciarBtn.hasAttribute('disabled')).toBe(true);
    expect(pausarBtn.hasAttribute('disabled')).toBe(false);
  });

  it('desativa o botão Pausar quando isRunning é false', () => {
    render(<Buttons isRunning={false} onStart={() => {}} onPause={() => {}} onReset={() => {}} />);
    const iniciarBtn = screen.getByText('Iniciar');
    const pausarBtn = screen.getByText('Pausar');

    expect(iniciarBtn.hasAttribute('disabled')).toBe(false);
    expect(pausarBtn.hasAttribute('disabled')).toBe(true);
  });

  it('chama as funções corretas ao clicar nos botões', () => {
    const startMock = jest.fn();
    const pauseMock = jest.fn();
    const resetMock = jest.fn();

    render(
      <Buttons
        isRunning={false}
        onStart={startMock}
        onPause={pauseMock}
        onReset={resetMock}
      />
    );

    fireEvent.click(screen.getByText('Iniciar'));
    fireEvent.click(screen.getByText('Resetar'));

    expect(startMock).toHaveBeenCalledTimes(1);
    expect(resetMock).toHaveBeenCalledTimes(1);
    expect(pauseMock).toHaveBeenCalledTimes(0);
  });
});
