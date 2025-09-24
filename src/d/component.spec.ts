import { Component, User } from './component';

describe('Component', () => {
    let component: Component;
    beforeEach(() => {
        component = new Component();
    });

    function mockUser(): User {
        return <User>{ id: 'foo', name: 'bar', age: 40 };
    }

    it('should return age as undefined if no user', () => {
        expect(component.age).toBeUndefined();
    });

    it('should correctly identify the user age', () => {
        const mockData = mockUser();
        component.setUser(mockData);
        expect(component.age).toEqual(40);
    });

    it('should increment the age of the user', () => {
        const mockData = mockUser();
        component.setUser(mockData);
        component.incrementAge();
        expect(component.age).toEqual(41);
    });

    it('should throw on increment age if user is undefined', () => {
        expect(() => {
            component.setUser(undefined);
            component.incrementAge();
        }).toThrow();
    });

    it('should decrement the age of the user', () => {
        const mockData = mockUser();
        component.setUser(mockData);
        component.decrementAge();
        expect(component.age).toEqual(39);
    });

    it('should throw on decrement age if user is undefined', () => {
        expect(() => {
            component.setUser(void 0);
            component.decrementAge();
        }).toThrow();
    });
});
