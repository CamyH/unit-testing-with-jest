import { SimpleBank } from './component';

describe('SimpleBank', () => {
    let component: SimpleBank;

    beforeEach(() => {
        component = new SimpleBank();
    });

    it('should throw an Error if the deposit amount is < 0', () => {
        expect(() => component.deposit(-1)).toThrowError();
    });

    it('should throw an Error if the withdraw amount is < 0', () => {
        expect(() => component.withdraw(-1)).toThrowError();
    });

    it('should deposit the correct amount', () => {
        component.deposit(4);
        expect(component.balance).toEqual(4);
    });

    it('should withdraw the correct amount', () => {
        component.withdraw(2);
        expect(component.balance).toEqual(-2);
    });
});
