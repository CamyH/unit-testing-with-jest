import { Car, Order, Shop } from './component';

describe('Shop', () => {
    let component: Shop;

    function mockDate(): Date {
        return new Date();
    }

    function mockCar(): Car {
        return <Car>{ make: 'Ferrari', model: '458 Italia', year: 2013, mileage: 17654 };
    }

    function mockOrder(): Order {
        return <Order>{ car: mockCar(), price: 200000, timestamp: mockDate() };
    }

    beforeEach(() => {
        component = new Shop();

        jest.useFakeTimers().setSystemTime(new Date('2020-01-01'));
    });

    it('should create a new order', () => {
        component.newOrder(mockOrder().car, mockOrder().price);

        expect(component.orders.length == 1);
        expect(component.orders.at(0)?.car === mockCar());
    });

    it('should create an order that contains make Ferrari', () => {
        component.newOrder(mockCar(), 200000);

        expect(component.orders.at(0)?.car).toEqual(
            expect.objectContaining({ make: 'Ferrari' })
        );
    });

    it('should contain the correct mocked date', () => {
        component.newOrder(mockOrder().car, mockOrder().price);

        expect(component.orders.at(0)?.timestamp === mockOrder().timestamp);
    });
});
