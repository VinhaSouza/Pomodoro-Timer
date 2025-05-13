import PomodoroTimer from '../../utils/pomodoroTimer';

jest.useFakeTimers();

describe('Pomodoro Timer - Pausa Longa após 4 ciclos', () => {
  let timer;

  beforeEach(() => {
    jest.useFakeTimers();
    timer = new PomodoroTimer();
    timer.reset();
  });

  test('deve trocar para "long-break" após 4 ciclos completos', () => {
  for (let i = 0; i < 4; i++) {
    timer.start(); // Estudo
    jest.advanceTimersByTime(25 * 60 * 1000);
    expect(timer.state).toBe('descanso');

    timer.start(); // Descanso
    jest.advanceTimersByTime(5 * 60 * 1000);

    if (i < 3) {
      expect(timer.state).toBe('estudo'); // primeiros 3 ciclos voltam para estudo
    } else {
      expect(timer.state).toBe('long-break'); // no 4º, vai para long-break
    }
  }
});

});
