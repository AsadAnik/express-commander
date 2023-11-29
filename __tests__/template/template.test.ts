import template from '../../cli/template';
import { getControllerTemplate, getModelTemplate, getRouteTemplate, getServiceTemplate } from '../../cli/template/templates';
import * as configModule from '../../cli/config';

const langauge: string = configModule?.language;

describe('Template', () => {
    it('should matching with model template correct way', () => {
        const type: string = 'model';
        const name: string = 'test';

        const temp: string = template(type, name); 
        const modelMatchTemp: string = getModelTemplate(name, langauge);

        expect(modelMatchTemp).toBe(temp);
    });

    it('should matching with service template correct way', () => {
        const type: string = 'service';
        const name: string = 'test';

        const temp: string = template(type, name);
        const serviceMatchTemp: string = getServiceTemplate(name, langauge);

        expect(serviceMatchTemp).toBe(temp);
    });

    it('should matching with controller template correct way', () => {
        const type: string = 'controller';
        const name: string = 'test';

        const temp: string = template(type, name);
        const controllerMatchTemp: string = getControllerTemplate(name, langauge);

        expect(controllerMatchTemp).toBe(temp);
    });

    it('should matching with route template correct way', () => {
        const type: string = 'route';
        const name: string = 'test';

        const temp: string = template(type, name);
        const routeMatchTemp: string = getRouteTemplate(name, langauge);

        expect(routeMatchTemp).toBe(temp);
    });
});