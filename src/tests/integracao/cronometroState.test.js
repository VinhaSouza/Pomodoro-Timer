import PomodoroTimer from "../../utils/pomodoroTimer";

jest.useFakeTimers();

describe("Integração - Cronômetro", () => {
  let timer;

  beforeEach(() => {
    jest.useFakeTimers();
    timer = new PomodoroTimer();
    timer.reset();
  });

  test("deve iniciar o cronômetro e mudar estado de estudo para descanso", () => {
    expect(timer.state).toBe("estudo");

    timer.start(); // Inicia o cronômetro em estado 'estudo'

    jest.advanceTimersByTime(25 * 60 * 1000); // Simula 25 minutos

    expect(timer.state).toBe("descanso"); // Verifica se mudou para descanso
  });

  test("deve iniciar o cronômetro e mudar estado de descanso para estudo", () => {
    // Simula fim do estudo
    timer.start();
    jest.advanceTimersByTime(25 * 60 * 1000);

    expect(timer.state).toBe("descanso");

    // Simula fim do descanso
    timer.start();
    jest.advanceTimersByTime(5 * 60 * 1000);

    expect(timer.state).toBe("estudo");
  });
});
