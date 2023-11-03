import { capitalize } from './text.util';

/**
 * ==== Formating Name of Files ====
 * @param type 
 * @param name 
 * @returns 
 */
const formatFileName = (type: string, name: string): string => {
    return type.toLowerCase() === 'model' ? capitalize(name) : name;
};

export default formatFileName;