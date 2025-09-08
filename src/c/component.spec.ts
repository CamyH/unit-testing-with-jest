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

    it('should not throw an Error if the deposit amount is > 0', () => {
        expect(() => component.deposit(2)).not.toThrowError();
    });

    it('should not throw an Error if the withdraw amount is > 0', () => {
        expect(() => component.withdraw(4)).not.toThrowError();
    });

    it('should return the correct balance', () => {
        component.deposit(4);
        expect(component.balance).toEqual(4);
    });
});
