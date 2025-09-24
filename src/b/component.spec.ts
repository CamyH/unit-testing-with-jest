import { Profile, User } from './component';

describe('Profile', () => {
    let component: Profile;

    beforeEach(() => {
        component = new Profile();
    });

    it('should correctly identify whether the user is an admin', () => {
        component.user = <User>{ isAdmin: true };
        expect(component.isAdmin).toBeTruthy();
    });

    it('should correctly identify whether the user is an admin if isAdmin is undefined', () => {
        component.user = <User>{ name: 'Tester' };
        expect(component.isAdmin).toBeFalsy();
    });

    it('should correctly identify whether the user is an admin if User is undefined', () => {
        component.user = undefined;
        expect(component.isAdmin).toBeFalsy();
    });
});
