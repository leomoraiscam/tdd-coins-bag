import Money from './Money';

describe('Money', () => {
  it('Should correctly handle dollar multiplication', () => {
    const five: Money = Money.dollar(5);

    expect(five.times(2).equals(Money.dollar(10))).toBeTruthy();

    expect(five.times(3).equals(Money.dollar(30))).toBeTruthy();
  });

  it('Should correctly handle euro multiplication', () => {
    const five: Money = Money.euro(5);

    expect(five.times(2).equals(Money.euro(10))).toBeTruthy();

    expect(five.times(3).equals(Money.euro(30))).toBeTruthy();
  });

  it('Should correctly handle money equality', () => {
    expect(Money.dollar(5).equals(Money.dollar(5))).toBeTruthy();
    expect(Money.dollar(5).equals(Money.dollar(6))).toBeFalsy();

    expect(Money.euro(5).equals(Money.euro(5))).toBeTruthy();
    expect(Money.euro(5).equals(Money.euro(6))).toBeFalsy();

    expect(Money.euro(5).equals(Money.dollar(5))).toBeFalsy();

    expect(new Money(5, 'USD').equals(Money.dollar(5))).toBeTruthy();
  });

  it('Shoud correctly handle currencies', () => {
    expect(Money.dollar(1).currency()).toEqual('USD');
    expect(Money.euro(1).currency()).toEqual('EUR');
  });
});
