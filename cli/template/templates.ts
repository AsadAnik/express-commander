import { capitalize } from '../utils/text.util';


/**
 * ==== Model Template ====
 * @param name 
 * @returns 
 */
export const getModelTemplate = (name: string, langauge: string = 'js'): string => (
    langauge === 'ts' ?
        `
import { Document, Model, Schema, model } from 'mongoose';

export interface I${capitalize(name)} extends Document {
    // Types of ${capitalize(name)}..
}

const ${name.toLocaleLowerCase()}Schema = new Schema<I${capitalize(name)}>({
    // Schema Shape..
});

/**
* ==== Blog Model ====
*/
const ${capitalize(name)}: Model<I${capitalize(name)}> = model('${capitalize(name)}', ${name}Schema);
export default ${capitalize(name)};
`
        :
        `
const { Schema, model } = require('mongoose');
    
const ${name.toLocaleLowerCase()}Schema = new Schema({
    // Schema Shape..
});
    
/**
* ==== Blog Model ====
*/
const ${capitalize(name)} = model('${capitalize(name)}', ${name}Schema);
export default ${capitalize(name)};
`
);


/**
 * ==== Controller Template ====
 * @param name 
 * @returns 
 */
export const getControllerTemplate = (name: string, langauge: string = 'js'): string => (
    langauge === 'ts' ?
        `
import { Request, Response, NextFunction } from 'express';
import ${capitalize(name)}Service from '../services/${name.toLocaleLowerCase()}.service';

interface ControllerFunction {
    (req: Request, res: Response, next: NextFunction): void;
}

class ${capitalize(name)}Controller {
    // Controlles of ${capitalize(name)}..
    /**
     * ---- Get All ${capitalize(name)}s ----
     */
    static get${capitalize(name)}s: ControllerFunction = async (
        _req: Request,
        res: Response,
        _next: NextFunction
    ) => {
        try {
            res.status(200).json({
                success: true,
                message: "${capitalize(name)}'s Controller Ready",
            });
        } catch(error) {
            console.log('Error occured -- ', error);
        }
    };

    /**
     * ---- Get ${capitalize(name)} ----
     */
    static get${capitalize(name)}: ControllerFunction = async (
        _req: Request,
        res: Response,
        _next: NextFunction
    ) => {
        try {
            res.status(200).json({
                success: true,
                message: "${capitalize(name)}'s Controller Ready",
            });
        } catch(error) {
            console.log('Error occured -- ', error);
        }
    };


    /**
     * ---- Create ${capitalize(name)} ----
     */
    static create${capitalize(name)}: ControllerFunction = async (
        _req: Request,
        res: Response,
        _next: NextFunction
    ) => {
        try {
            res.status(200).json({
                success: true,
                message: "${capitalize(name)}'s Controller Ready",
            });
        } catch(error) {
            console.log('Error occured -- ', error);
        }
    };

    /**
     * ---- Update ${capitalize(name)} ----
     */
    static update${capitalize(name)}: ControllerFunction = async (
        _req: Request,
        res: Response,
        _next: NextFunction
    ) => {
        try {
            res.status(200).json({
                success: true,
                message: "${capitalize(name)}'s Controller Ready",
            });
        } catch(error) {
            console.log('Error occured -- ', error);
        }
    };

    /**
     * ---- Delete ${capitalize(name)} ----
     */
    static delete${capitalize(name)}: ControllerFunction = async (
        _req: Request,
        res: Response,
        _next: NextFunction
    ) => {
        try {
            res.status(200).json({
                success: true,
                message: "${capitalize(name)}'s Controller Ready",
            });
        } catch(error) {
            console.log('Error occured -- ', error);
        }
    };
}

export default ${capitalize(name)}Controller;
`
        :
        `
const ${capitalize(name)}Service = require('../services/${name.toLocaleLowerCase()}.service');

class ${capitalize(name)}Controller {
    // Controlles of ${capitalize(name)}..
    /**
     * ---- Get All ${capitalize(name)}s ----
     */
    static get${capitalize(name)}s = async (
        _req,
        res,
        _next
    ) => {
        try {
            res.status(200).json({
                success: true,
                message: "${capitalize(name)}'s Controller Ready",
            });
        } catch(error) {
            console.log('Error occured -- ', error);
        }
    };

    /**
     * ---- Get ${capitalize(name)} ----
     */
    static get${capitalize(name)} = async (
        _req,
        res,
        _next
    ) => {
        try {
            res.status(200).json({
                success: true,
                message: "${capitalize(name)}'s Controller Ready",
            });
        } catch(error) {
            console.log('Error occured -- ', error);
        }
    };


    /**
     * ---- Create ${capitalize(name)} ----
     */
    static create${capitalize(name)} = async (
        _req,
        res,
        _next
    ) => {
        try {
            res.status(200).json({
                success: true,
                message: "${capitalize(name)}'s Controller Ready",
            });
        } catch(error) {
            console.log('Error occured -- ', error);
        }
    };

    /**
     * ---- Update ${capitalize(name)} ----
     */
    static update${capitalize(name)} = async (
        _req,
        res,
        _next
    ) => {
        try {
            res.status(200).json({
                success: true,
                message: "${capitalize(name)}'s Controller Ready",
            });
        } catch(error) {
            console.log('Error occured -- ', error);
        }
    };

    /**
     * ---- Delete ${capitalize(name)} ----
     */
    static delete${capitalize(name)} = async (
        _req,
        res,
        _next
    ) => {
        try {
            res.status(200).json({
                success: true,
                message: "${capitalize(name)}'s Controller Ready",
            });
        } catch(error) {
            console.log('Error occured -- ', error);
        }
    };
}

export default ${capitalize(name)}Controller;
`
);


/**
 * ==== Route Template ====
 * @param name 
 * @returns 
 */
export const getRouteTemplate = (name: string, langauge: string = 'js'): string => (
    langauge === 'ts' ?
        `
import { Router } from 'express';
import ${capitalize(name)}Controller from '../controllers/${name.toLocaleLowerCase()}.controller';
const router = Router();

/**
 * ==== ${capitalize(name)} Routes ====
 */
router.get('/', ${capitalize(name)}Controller.get${capitalize(name)}s)
    .post('/', ${capitalize(name)}Controller.create${capitalize(name)})
    .get('/:Id', ${capitalize(name)}Controller.get${capitalize(name)})
    .put('/:Id', ${capitalize(name)}Controller.update${capitalize(name)})
    .delete('/:Id', ${capitalize(name)}Controller.delete${capitalize(name)});

export default router;
`
        :
        `
const { Router } = require('express');
const ${capitalize(name)}Controller = require('../controllers/${name.toLocaleLowerCase()}.controller');
const router = Router();
    
/**
* ==== ${capitalize(name)} Routes ====
*/
router.get('/', ${capitalize(name)}Controller.get${capitalize(name)}s)
    .post('/', ${capitalize(name)}Controller.create${capitalize(name)})
    .get('/:Id', ${capitalize(name)}Controller.get${capitalize(name)})
    .put('/:Id', ${capitalize(name)}Controller.update${capitalize(name)})
    .delete('/:Id', ${capitalize(name)}Controller.delete${capitalize(name)});
    
export default router;
    `
);


/**
 * ==== Service Template ====
 * @param name 
 * @param langauge 
 * @returns 
 */
export const getServiceTemplate = (name: string, langauge: string = 'js'): string => (
    langauge === 'ts' ?
        `
// Service for ${capitalize(name)}
import ${capitalize(name)}, { I${capitalize(name)} } from '../models/${capitalize(name)}';

class ${capitalize(name)}Service {
    // ${capitalize(name)} Services..
}

export default ${capitalize(name)}Service;
`
        :
        `
// Service for ${capitalize(name)}
const ${capitalize(name)} = require('../models/${capitalize(name)}');

class ${capitalize(name)}Service {
    // ${capitalize(name)} Services..
}

export default ${capitalize(name)}Service;
`
);