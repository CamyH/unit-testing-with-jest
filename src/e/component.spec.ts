import { Engine } from './component';

describe('Engine', () => {
    let component: Engine;

    beforeEach(() => {
        component = new Engine();
        jest.spyOn(console, 'log').mockImplementation(() => null);
    });

    it('should have the status message "started" once started', () => {
        component.start();
        expect(component.status).toEqual('started');
    });

    it('should have the status message "stopped" once stopped', () => {
        component.stop();
        expect(component.status).toEqual('stopped');
    });
});
