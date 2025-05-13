import PomodoroTimer from '../../utils/pomodoroTimer';

jest.useFakeTimers();

describe('Pomodoro Timer - Contagem de Ciclos', () => {
  let timer;

  beforeEach(() => {
    jest.useFakeTimers();
    timer = new PomodoroTimer();
    timer.reset();
  });

  test('deve contar um ciclo completo após estudo e descanso', () => {
    timer.start();
    jest.advanceTimersByTime(25 * 60 * 1000); // estudo termina
    expect(timer.state).toBe('descanso');

    timer.start();
    jest.advanceTimersByTime(5 * 60 * 1000); // descanso termina
    expect(timer.state).toBe('estudo');
    expect(timer.completedCycles).toBe(1);
  });
});

