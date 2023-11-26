import path from 'path';
import { dirPath } from '../config';
import * as configModule from '../config';

// Define the base directories where we want to generate files
export const baseDir: string = dirPath; // This is the directory where the generator script is located

/**
 * ==== Joining Path Based on Type ====
 * @param type 
 */
export const joinPath = (type: string): string => path.join(baseDir, `${type}s`);

/**
 * ==== Create File Path for perfect naming of files ====
 * @param type 
 * @param name 
 * @returns 
 */
const makeFilePath = (type: string, name: string): string => {
    const dir: string = path.join(baseDir, `${type}s`);
    const langauge: string = configModule?.language;

    const filePath: string = type === "service" || type === "controller" || type === "route" ?
        path.join(dir, langauge === 'ts' ? `${name}.${type}.ts` : `${name}.${type}.js`)
        :
        path.join(dir, langauge === 'ts' ? `${name}.ts` : `${name}.js`);

    return filePath;
};

export default makeFilePath;