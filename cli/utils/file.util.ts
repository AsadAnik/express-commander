import fs from 'fs/promises';

/**
 * ==== Write File ====
 * @param fileName 
 * @param template 
 * @returns 
 */
export const asyncWriteFile = async(fileName: string, template: string): Promise<void> => {
    return await fs.writeFile(fileName, template, 'utf-8');
};


/**
 * == Create Directory for perfect locations of files ==
 * @param dirPath 
 */
export const asyncMakeDirectory = async (dirPath: string): Promise<void> => {
    try {
        await fs.mkdir(dirPath, { recursive: true });

    } catch (error) {
        console.error(`Error while creating directory ${dirPath} -- ${error}`);
    }
};