import { tick } from '../../utils/timerUtils';

describe('tick', () => {
  it('deve diminuir o tempo em 1 segundo se o tempo for maior que 0', () => {
    expect(tick(25)).toBe(24);
    expect(tick(1)).toBe(0);
  });

  it('deve retornar 0 se o tempo já for 0', () => {
    expect(tick(0)).toBe(0);
  });
});