import { Command } from 'commander';
import generateFile from '../generator';

const setupCommands = (program: Command): void => {
    program
        .command('model <name>')
        .description('Generate a Model')
        .action((name) => {
            generateFile("model", name);
        });

    program
        .command('service <name>')
        .description('Generate a Service')
        .action((name) => {
            generateFile("service", name);
        });

    program
        .command('controller <name>')
        .description('Generate a Controller')
        .action((name) => {
            generateFile("controller", name);
        });

    program
        .command('route <name>')
        .description('Generate a Route')
        .action((name) => {
            generateFile("route", name);
        });

    program
        .command('all:schema <name>')
        .description('Generate a Model, Service and Controller')
        .action((name) => {
            generateFile("model", name);
            generateFile("service", name);
            generateFile("controller", name);
            generateFile("route", name);
        });

    program
        .command('all <name>')
        .description('Generate a Model, Service and Controller')
        .action((name) => {
            generateFile("service", name);
            generateFile("controller", name);
            generateFile("route", name);
        });
};

export default setupCommands;