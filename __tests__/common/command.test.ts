import { Command } from 'commander';
import setupCommands from '../../cli/common/command';

describe('setupCommands', () => {
    let program: Command;

    beforeEach(() => {
        program = new Command();

        jest.spyOn(program, 'command').mockReturnValue(program);
        jest.spyOn(program, 'action').mockReturnValue(program);
    });

    it('should set up "make:model" command', () => {
        setupCommands(program);

        expect(program.command).toHaveBeenCalledWith('make:model <name>');
        expect(program.action).toHaveBeenCalledWith(expect.any(Function));
    });

    
    it('should set up "make:service" command', () => {
        setupCommands(program);

        expect(program.command).toHaveBeenCalledWith('make:service <name>');
        expect(program.action).toHaveBeenCalledWith(expect.any(Function));
    });


    it('should set up "make:route" command', () => {
        setupCommands(program);

        expect(program.command).toHaveBeenCalledWith('make:route <name>');
        expect(program.action).toHaveBeenCalledWith(expect.any(Function));
    });


    it('should set up "make:controller" command', () => {
        setupCommands(program);

        expect(program.command).toHaveBeenCalledWith('make:controller <name>');
        expect(program.action).toHaveBeenCalledWith(expect.any(Function));
    });
});