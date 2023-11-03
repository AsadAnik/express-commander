import { getModelTemplate, getControllerTemplate, getRouteTemplate, getServiceTemplate } from './templates';

/**
 * ==== Get Matching Tempalate ====
 * @param type 
 * @param name 
 * @returns 
 */
const getTemplate = (type: string, name: string): string => {
    let template: string;

    switch(type.toLowerCase()) {
        case "model":
            template = getModelTemplate(name);
            break;
        
        case "controller":
            template = getControllerTemplate(name);
            break;

        case "service":
            template = getServiceTemplate(name);
            break;

        case "route":
            template = getRouteTemplate(name);
            break;

        default:
            template = "";
    }

    return template;
};

export default getTemplate;