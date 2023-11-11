import { Command } from 'commander';
import setupCommands from './common/command';

// This script is the main application entry point..
const program = new Command();
setupCommands(program);
program.parse(process.argv);