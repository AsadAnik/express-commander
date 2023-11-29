// import { spawnSync } from "child_process";
import prompts from "prompts";
import * as fs from "fs";
import * as path from "path";


/**
 * -- Configuration file where we wants to make config basically --
 * -- From here only Language can be configuring --
 */
const configPath: string = path.join(__dirname, './config/index.ts');

/**
 * ---- Terminal Prompting ----
 * @returns 
 */
const terminalPrompt = async (): Promise<Object | Boolean> => {
    try {
        const response = await prompts([
            {
                type: 'autocomplete',
                name: 'language',
                message: 'Choose the language to your commander: ',
                choices: [
                    { title: 'JavaScript', value: 'js' },
                    { title: 'TypeScript', value: 'ts' }
                ],
                initial: 'JavaScript',
            },
            {
                type: 'autocomplete',
                name: 'directory',
                message: 'Are you using (src) directory ?',
                choices: [
                    { title: 'Yes', value: 'yes' },
                    { title: 'No', value: 'no' }
                ],
                initial: 'No',
            }
        ]);

        if (response) return {
            language: response?.language,
            directory: response?.directory
        };
        return false;

    } catch (error) {
        console.error('Error during language prompt: ', error);
        return false;
    }
};

/**
 * ---- Set/Update Language, Directory when you are selecting for it ----
 * @param language 
 * @param directory
 */
const setConfigs = (language: string | boolean, directory: string | boolean): void => {
    try {
        let configContent = fs.readFileSync(configPath, 'utf-8');

        if (language) {
            // Replace the existing language value..
            configContent = configContent.replace(/export const language: string = '.*';/, `export const language: string = '${language}';`);
        }

        if (directory) {
            const src: string = directory === 'yes' ? 'src' : '';
            // Updating the src value..
            configContent = configContent.replace(/export const directory: string = '.*';/, `export const directory: string = '${src}';`);
        }

        fs.writeFileSync(configPath, configContent, 'utf-8');

    } catch (error) {
        console.error(`Error setting the Language: ${error}`);
    }
};


/**
 * ---- Main Function ----
 */
(async (): Promise<void> => {
    try {
        const termResponse: object | boolean = await terminalPrompt();

        if (termResponse && typeof termResponse === 'object') {
            const language: string = Object.values(termResponse)[0];
            const directory: string = Object.values(termResponse)[1];

            // Setting Language/Directory Store for Future Use..
            setConfigs(language, directory);
        }

        /**
         * -- This is needs when we are doing something with terminal with one single process --
         * -- Without the terminal action or process kills it will not store the command script or data --
         * -- You can open the codebase with [index.ts] comments code for working process together --
         */
        // if (language) {
        //     const command: string = 'npx';
        //     const args: string[] = ['ts-node', './index.ts', `--language=${language}`];

        //     spawnSync(command, args, { stdio: 'inherit', encoding: 'utf-8', cwd: __dirname });

        // } else {
        //     console.log('Language seleciton canceled. Exiting post-installation script.');
        // }

    } catch (error) {
        console.log('Error when command executions: ', error);
    }
})();
