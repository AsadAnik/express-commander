import formatFileName from "../../cli/utils/format.util";

describe('FormatFileName Util', () => {
    it('should file format with model name will be capitalized', () => {
        const type: string = 'model';
        const name: string = 'teSt'.toLowerCase();
        const modelNameExample: string = 'Test';

        const formattedModelName: string = formatFileName(type, name);
        expect(modelNameExample).toBe(formattedModelName);
    });

    it('should file format with service, controller and route name will be lowerCased', () => {
        const serviceType: string = 'service';
        const controllerType: string = 'controller';
        const routeType: string = 'route';
        const name: string = 'tEst';

        const formattedServiceName: string = formatFileName(serviceType, name);
        const formattedControllerName: string = formatFileName(controllerType, name);
        const formattedRouterName: string = formatFileName(routeType, name);

        expect(name.toLowerCase()).toBe(formattedServiceName);
        expect(name.toLowerCase()).toBe(formattedControllerName);
        expect(name.toLowerCase()).toBe(formattedRouterName);
    });
});