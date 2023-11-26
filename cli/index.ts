import { Command } from 'commander';
import setupCommands from './common/command';

// This script is the main application entry point..
const program = new Command();

/**
 * -- If you wants to test the language is selected from prompt or not --
 * -- And instant process case that will be work for you not like saving to config data --
 */
// Extract the language from the command-line arguments
// program.option('--language <language>', 'Specify the language').parse(process.argv);
// const options = program.opts();
// setupCommands(program, options?.language);

setupCommands(program);
program.parse(process.argv);