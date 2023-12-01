import fs from 'fs';
import { asyncWriteFile, asyncMakeDirectory } from '../../cli/utils/file.util';

describe('File Util', () => {
    it('should file creating with perfect format', async () => {
        const fileName: string = 'testFile.txt';
        const template: string = 'This is a test content.';

        await asyncWriteFile(fileName, template);

        // Check if the file is exists and have a correct content..
        const fileContent = fs.readFileSync(fileName, 'utf-8');
        expect(fileContent).toBe(template);
    });

    it('should create a directory with asyncMakeDirectory function', async () => {
        const dirPath: string = 'testDirectory';

        await asyncMakeDirectory(dirPath);

        // Check if the directory exists..
        const stats = fs.statSync(dirPath);
        expect(stats.isDirectory()).toBe(true);
    }); 
});