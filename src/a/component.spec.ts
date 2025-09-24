import { Calculator } from './component';

describe('Calculator', () => {
    let component: Calculator;

    beforeEach(() => {
        component = new Calculator();
    });

    it('should add two numbers together', () => {
        expect(component.add(2, 2)).toEqual(4);
    });

    it('should subtract one number from the other', () => {
        expect(component.subtract(4, 2)).toEqual(2);
    });

    it('should add all the numbers in a list together', () => {
        expect(component.sum([1, 1, 1, 1, 1, 1])).toEqual(6);
    });
});
