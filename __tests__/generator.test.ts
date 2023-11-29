import path from 'path';
import generator from "../cli/generator";
import * as configModule from '../cli/config';
import { baseDir } from '../cli/utils/path.util';
import { capitalize } from '../cli/utils/text.util';
import makeFilePath from '../cli/utils/path.util';
import formatFileName from '../cli/utils/format.util';

const langauge: string = configModule?.language;

/**
 * ---- Creation of Generator for File ----
 * @param type 
 * @param name 
 * @returns 
 */
const creation = async (type: string, name: string): Promise<string> => {
    await generator(type, name);
    const modelFileAndLocation: string = makeFilePath(type, formatFileName(type, name));
    return modelFileAndLocation
}

/**
 * ---- Creation of File with Full Path ----
 * @param type 
 * @param name 
 * @param langauge 
 * @returns 
 */
const filePathOfCreation = (type: string, name: string, langauge: string): string => {
    const dir: string = path.join(baseDir, `${type}s`);
    let fileNameSchema: string;

    switch (type) {
        case "service":
            fileNameSchema = path.join(dir, langauge === 'ts' ? `${name}.service.ts` : `${name}.service.js`);
            break;

        case "controller":
            fileNameSchema = path.join(dir, langauge === 'ts' ? `${name}.controller.ts` : `${name}.controller.js`);
            break;

        case "route":
            fileNameSchema = path.join(dir, langauge === 'ts' ? `${name}.route.ts` : `${name}.route.js`);
            break;

        case "model":
            fileNameSchema = path.join(dir, langauge === 'ts' ? `${capitalize(name)}.ts` : `${capitalize(name)}.js`);
            break;

        default:
            fileNameSchema = '';
    }

    return fileNameSchema;
};


describe('generateFile', () => {
    it('should files create with perfect location and output', async () => {
        // Spy on console.log..
        const logSpy = jest.spyOn(console, 'log');
        const modelType: string = 'model';
        const serviceType: string = 'service';
        const routeType: string = 'route';
        const controllerType: string = 'controller';
        const name: string = 'test';

        // Model Creation..
        const modelFileAndLocation: string = await creation(modelType, name);
        const modelConsoleLog: string = `${capitalize(modelType)} ${name} created successfully in ${modelFileAndLocation}`;

        // Service Creation..
        const serviceFileAndLocation: string = await creation(serviceType, name);
        const serviceConsoleLog: string = `${capitalize(serviceType)} ${name} created successfully in ${serviceFileAndLocation}`;

        // Route Creation..
        const routeFileAndLocation: string = await creation(routeType, name);
        const routeConsoleLog: string = `${capitalize(routeType)} ${name} created successfully in ${routeFileAndLocation}`;

        // Controller Creation..
        const controllerFileAndLocation: string = await creation(controllerType, name);
        const controllerConsoleLog: string = `${capitalize(controllerType)} ${name} created successfully in ${controllerFileAndLocation}`;

        expect(logSpy).toHaveBeenCalledWith(modelConsoleLog);
        expect(logSpy).toHaveBeenCalledWith(serviceConsoleLog);
        expect(logSpy).toHaveBeenCalledWith(routeConsoleLog);
        expect(logSpy).toHaveBeenCalledWith(controllerConsoleLog);

        // Removing the SPY..
        logSpy.mockRestore();
        logSpy.mockRestore();
        logSpy.mockRestore();
        logSpy.mockRestore();
    });


    it('should model create with perfect file naming', async () => {
        const modelType: string = 'model';
        const serviceType: string = 'service';
        const routeType: string = 'route';
        const controllerType: string = 'controller';
        const name: string = 'test';

        // Model File Creation..
        const ModelFileName: string = makeFilePath(modelType, formatFileName(modelType, name));
        const ModelFileNameSchema: string = filePathOfCreation(modelType, name, langauge);

        // Service File Creation..
        const ServiceFileName: string = makeFilePath(serviceType, formatFileName(serviceType, name));
        const ServiceFileNameSchema: string = filePathOfCreation(serviceType, name, langauge);

        // Route File Creation..
        const RouteFileName: string = makeFilePath(routeType, formatFileName(routeType, name));
        const RouteFileNameSchema: string = filePathOfCreation(routeType, name, langauge);

        // Controller File Creation..
        const ControllerFileName: string = makeFilePath(controllerType, formatFileName(controllerType, name));
        const ControllerFileNameSchema: string = filePathOfCreation(controllerType, name, langauge);

        expect(ModelFileNameSchema).toBe(ModelFileName);
        expect(ServiceFileNameSchema).toBe(ServiceFileName);
        expect(RouteFileNameSchema).toBe(RouteFileName);
        expect(ControllerFileNameSchema).toBe(ControllerFileName);
    });
});