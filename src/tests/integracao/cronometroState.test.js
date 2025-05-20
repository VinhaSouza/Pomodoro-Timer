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

    timer.start(); 

    jest.advanceTimersByTime(25 * 60 * 1000); 

    expect(timer.state).toBe("descanso"); 
  });

  test("deve iniciar o cronômetro e mudar estado de descanso para estudo", () => {
    timer.start();
    jest.advanceTimersByTime(25 * 60 * 1000);

    expect(timer.state).toBe("descanso");

    timer.start();
    jest.advanceTimersByTime(5 * 60 * 1000);

    expect(timer.state).toBe("estudo");
  });
});
