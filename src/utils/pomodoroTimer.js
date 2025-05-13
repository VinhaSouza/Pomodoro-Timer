class PomodoroTimer {
  constructor() {
    this.state = 'estudo';
    this.studyTime = 25 * 60 * 1000;
    this.restTime = 5 * 60 * 1000;
    this.longBreakTime = 30 * 60 * 1000;
    this.interval = null;
    this.completedCycles = 0;
  }

  start() {
    const duration = this.state === 'estudo' ? this.studyTime : this.state === 'descanso' ? this.restTime : this.longBreakTime;

    this.interval = setTimeout(() => {
      if (this.state === 'estudo') {
        this.state = 'descanso';
      }else if (this.state === 'descanso') {
        this.completedCycles += 1;
        this.state = this.completedCycles >= 4 ? 'long-break' : 'estudo';
      } else if (this.state === 'long-break') {
        this.state = 'estudo';
        this.completedCycles = 0;  // ciclo completo só quando volta para estudo
      }
    }, duration);
  }

  reset() {
    clearTimeout(this.interval);
    this.interval = null;
    this.state = 'estudo';
    this.completedCycles = 0;
  }
}

export default PomodoroTimer;

