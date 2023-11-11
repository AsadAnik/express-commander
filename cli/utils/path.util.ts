import path from 'path';
import { dirPath } from '../config';

// Define the base directories where we want to generate files
export const baseDir = dirPath; // This is the directory where the generator script is located

/**
 * ==== Joining Path Based on Type ====
 * @param type 
 */
export const joinPath = (type: string) => path.join(baseDir, `${type}s`);

/**
 * ==== Create File Path for perfect naming of files ====
 * @param type 
 * @param name 
 * @returns 
 */
const makeFilePath = (type: string, name: string) => {
    const dir = path.join(baseDir, `${type}s`);

    const filePath = type === "service" || type === "controller" || type === "route" ?
        path.join(dir, `${name}.${type}.ts`)
        :
        path.join(dir, `${name}.ts`);

    return filePath;
};

export default makeFilePath;