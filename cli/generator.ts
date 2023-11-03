import template from './template';
import { capitalize } from './utils/text.util';
import makeFilePath, { joinPath } from './utils/path.util';
import formatFileName from './utils/format.util';
import { asyncWriteFile, asyncMakeDirectory } from './utils/file.util';

/**
 * ==== Generate File Based on Type & Name ====
 * @param type 
 * @param name 
 */
const generateFile = async (type: string, name: string): Promise<void> => {
    try {
        const templateName = template(type, name);
        const modelDir = joinPath(type);
        await asyncMakeDirectory(modelDir);

        const fileName = makeFilePath(type, formatFileName(type, name));
        await asyncWriteFile(fileName, templateName);
        console.log(`${capitalize(type)} ${name} created successfully in ${fileName}`);

    } catch (error) {
        console.error(`Error while creating Model -- ${error}`);
    }
}

export default generateFile;