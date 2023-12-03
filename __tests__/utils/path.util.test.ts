import path from 'path';
import makeFilePath, { baseDir, joinPath } from '../../cli/utils/path.util';
import * as configModule from '../../cli/config';

describe('baseDir', () => {
    it('should return the base directory with an individual language', () => {
        const dirPath: string = configModule?.dirPath === 'src' ? path.join(configModule?.dirPath, 'src') : path.join(configModule?.dirPath, '');
        expect(baseDir).toBe(dirPath);
    });
});

describe('joinPath', () => {
    it('should join path based on type with an individual type', () => {
        const type: string = 'model';
        const result: string = joinPath(type);

        expect(result).toBe(path.join(baseDir, `${type}s`));
    });
});

describe('makeFilePath', () => {
    it('should create file path with an individual language', () => {
        const selectedLanguage: string = configModule?.language;
        const type: string = 'model'; // controller Or, service Or, route Or, model
        const name: string = 'testModel';

        const result: string = makeFilePath(type, name);

        const directoryName: string = `${type}s`;
        let fileName: string;

        if (type === 'controller' || type === 'service' || type === 'route') {
            fileName = `${name}.${type}.${selectedLanguage}`;
        } else {
            fileName = `${name}.${selectedLanguage}`;
        }

        expect(result).toBe(path.join(baseDir, directoryName, fileName));
    });
});