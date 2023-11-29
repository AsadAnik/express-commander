import { getModelTemplate, getControllerTemplate, getRouteTemplate, getServiceTemplate } from './templates';
import * as configModule from '../config';

/**
 * ==== Get Matching Tempalate ====
 * @param type 
 * @param name 
 * @returns 
 */
const getTemplate = (type: string, name: string): string => {
    let template: string;
    const langauge: string = configModule?.language;

    switch(type.toLowerCase()) {
        case "model":
            template = getModelTemplate(name, langauge);
            break;
        
        case "controller":
            template = getControllerTemplate(name, langauge);
            break;

        case "service":
            template = getServiceTemplate(name, langauge);
            break;

        case "route":
            template = getRouteTemplate(name, langauge);
            break;

        default:
            template = "";
    }

    return template;
};

export default getTemplate;