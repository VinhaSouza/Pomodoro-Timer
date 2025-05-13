import PomodoroTimer from "../../utils/pomodoroTimer";

describe('Pomodoro Timer', () => {
  let timer;

  beforeEach(() => {
    jest.useFakeTimers();
    timer = new PomodoroTimer();
    timer.reset();
  });

  test('deve trocar de "estudo" para "descanso" após o tempo de estudo', () => {
    timer.start();
    jest.advanceTimersByTime(25 * 60 * 1000);
    expect(timer.state).toBe('descanso');
  });

  test('deve trocar de "descanso" para "estudo" após o tempo de descanso', () => {
    timer.start();
    jest.advanceTimersByTime(25 * 60 * 1000); // troca para descanso
    expect(timer.state).toBe('descanso');

    timer.start(); // inicia descanso
    jest.advanceTimersByTime(5 * 60 * 1000); // troca para estudo
    expect(timer.state).toBe('estudo');
  });



});

