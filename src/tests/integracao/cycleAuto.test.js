import PomodoroTimer from "../../utils/pomodoroTimer";

jest.useFakeTimers();

describe("Integração - Início automático do descanso", () => {
  let timer;

  beforeEach(() => {
    jest.useFakeTimers();
    timer = new PomodoroTimer();
    timer.reset();
  });

  test("deve iniciar automaticamente o descanso após finalizar o estudo", () => {
    expect(timer.state).toBe("estudo");

    timer.start(); 

    jest.advanceTimersByTime(25 * 60 * 1000);

    expect(timer.state).toBe("descanso");
  });
});
