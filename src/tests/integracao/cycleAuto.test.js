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

    timer.start(); // Inicia o estudo

    // Avança o tempo de estudo completo
    jest.advanceTimersByTime(25 * 60 * 1000);

    // Espera que o sistema tenha trocado automaticamente para descanso
    expect(timer.state).toBe("descanso");
  });
});
