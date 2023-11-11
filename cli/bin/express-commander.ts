#!/usr/bin/env node

import { Command } from 'commander';
import generateFile from '../generator';

const program = new Command();


program
    .command('generate:model <name>')
    .description('Generate a Model')
    .action((name) => {
        generateFile("model", name);
    });

program
    .command('generate:service <name>')
    .description('Generate a Service')
    .action((name) => {
        generateFile("service", name);
    });

program
    .command('generate:controller <name>')
    .description('Generate a Controller')
    .action((name) => {
        generateFile("controller", name);
    });

program
    .command('generate:route <name>')
    .description('Generate a Route')
    .action((name) => {
        generateFile("route", name);
    });

program
    .command('generate:all:schema <name>')
    .description('Generate a Model, Service and Controller')
    .action((name) => {
        generateFile("model", name);
        generateFile("service", name);
        generateFile("controller", name);
        generateFile("route", name);
    });

program
    .command('generate:all <name>')
    .description('Generate a Model, Service and Controller')
    .action((name) => {
        generateFile("service", name);
        generateFile("controller", name);
        generateFile("route", name);
    });

program.parse(process.argv);