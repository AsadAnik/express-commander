import { Command } from 'commander';
import generateFile from '../generator';
import configuration from '../configuration';

/**
 * -- Setup Commands with Generate Actions Root Function --
 */
const setupCommands = (program: Command): void => {
    program
        .command('config')
        .description('Configuration for your commander')
        .action(async() => {
            await configuration();
        });
    program
        .command('make:model <name>')
        .description('Generate a Model')
        .action((name) => {
            generateFile("model", name);
        });

    program
        .command('make:service <name>')
        .description('Generate a Service')
        .action((name) => {
            generateFile("service", name);
        });

    program
        .command('make:controller <name>')
        .description('Generate a Controller')
        .action((name) => {
            generateFile("controller", name);
        });

    program
        .command('make:route <name>')
        .description('Generate a Route')
        .action((name) => {
            generateFile("route", name);
        });

    program
        .command('make:all:schema <name>')
        .description('Generate a Model, Service and Controller')
        .action((name) => {
            generateFile("model", name);
            generateFile("service", name);
            generateFile("controller", name);
            generateFile("route", name);
        });

    program
        .command('make:all <name>')
        .description('Generate a Model, Service and Controller')
        .action((name) => {
            generateFile("service", name);
            generateFile("controller", name);
            generateFile("route", name);
        });
};

export default setupCommands;