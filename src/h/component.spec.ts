import { AccountService, User, UserPortal } from './component';

describe('UserPortal', () => {
    let component: UserPortal;
    let accountService: Partial<AccountService>;

    const mockedUser = (): User => <User>{ id: '1' };

    beforeEach(() => {
        accountService = {
            user: mockedUser(),
            doLogin: jest.fn(),
            doLogout: jest.fn()
        };
        component = new UserPortal(<AccountService>accountService);
    });

    it('should call the account service method doLogin on login', () => {
        component.login();
        expect(accountService.doLogin).toBeCalledWith('foo');
    });

    it('should call the account service method doLogout on logout', () => {
        component.logout();
        expect(accountService.doLogout).toBeCalledWith();
    });

    it('should return the user from the service', () => {
        expect(component.user).toEqual(mockedUser());
    });
});

describe('AccountService', () => {
    let service: AccountService;

    const mockedUser = (): User => <User>{ id: '1', name: 'foo' };

    beforeEach(() => {
        service = new AccountService();
    });

    it('should return undefined when get user is called with no user set', () => {
        expect(service.user).toBeUndefined();
    });

    it('should return the user when get user is called', () => {
        service.doLogin(mockedUser().id);
        expect(service.user).toEqual(mockedUser());
    });

    it('should return early when doLogout is called if no user is set', () => {
        expect(() => service.doLogout()).not.toThrow();
    });

    it('should return user as undefined after logging out', () => {
        service.doLogin(mockedUser().id);
        service.doLogout();
        expect(service.user).toBeUndefined();
    });
});
