import { ColumnHeaderParams, CustomColumnHeader } from './component';

describe('CustomColumnHeader', () => {
    let component: CustomColumnHeader;
    const undefinedComponent = new CustomColumnHeader();
    let params: ColumnHeaderParams;

    const mockColumnHeaderParams = (condition: boolean): ColumnHeaderParams => {
        return <ColumnHeaderParams>{
            headerName: 'MockedHeader',
            api: {
                isExpandable: () => true,
                isExpanded: () => condition,
                setExpanded: (value: boolean) => (condition = value)
            }
        };
    };
    beforeEach(() => {
        component = new CustomColumnHeader();
        params = mockColumnHeaderParams(true);
        component.init(params);
    });

    it('should display the correct header name if given parameters', () => {
        expect(component.displayName).toEqual(params.headerName);
    });

    it('should return undefined if no parameters given', () => {
        expect(undefinedComponent.displayName).toBeUndefined();
    });

    it('should return true when calling isExpanded and given parameters', () => {
        expect(component.isExpanded).toEqual(params.api.isExpanded());
    });

    it('should return false when calling isExpanded and not given parameters', () => {
        expect(undefinedComponent.isExpanded).toEqual(false);
    });

    it('should inverse the expanded parameter when toggle is called', () => {
        expect(component.isExpanded).toEqual(params.api.isExpanded());

        const isExpanded = params.api.isExpanded();

        component.toggle();

        expect(component.isExpanded).toEqual(!isExpanded);
    });

    it('should exit early when toggle is called with no parameters', () =>
        expect(() => undefinedComponent.toggle()).not.toThrow());
});
