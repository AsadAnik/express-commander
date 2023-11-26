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
import catchAsyncErrorHandle from "../middleware/catchAsyncErrors";
import { ControllerFunction } from '../common/types';
import ${capitalize(name)}Service from '../services/${name.toLocaleLowerCase()}.service';

class ${capitalize(name)}Controller {
    // Controlles of ${capitalize(name)}..
    /**
     * ---- Get All ${capitalize(name)}s ----
     */
    static get${capitalize(name)}s: ControllerFunction = catchAsyncErrorHandle(async (
        _req: Request,
        res: Response,
        _next: NextFunction
    ) => {
        res.status(200).json({
            success: true,
            message: "${capitalize(name)}'s Controller Ready",
        });
    });

    /**
     * ---- Get ${capitalize(name)} ----
     */
    static get${capitalize(name)}: ControllerFunction = catchAsyncErrorHandle(async (
        _req: Request,
        res: Response,
        _next: NextFunction
    ) => {
        res.status(200).json({
            success: true,
            message: "${capitalize(name)}'s Controller Ready",
        });
    });


    /**
     * ---- Create ${capitalize(name)} ----
     */
    static create${capitalize(name)}: ControllerFunction = catchAsyncErrorHandle(async (
        _req: Request,
        res: Response,
        _next: NextFunction
    ) => {
        res.status(200).json({
            success: true,
            message: "${capitalize(name)}'s Controller Ready",
        });
    });

    /**
     * ---- Update ${capitalize(name)} ----
     */
    static update${capitalize(name)}: ControllerFunction = catchAsyncErrorHandle(async (
        _req: Request,
        res: Response,
        _next: NextFunction
    ) => {
        res.status(200).json({
            success: true,
            message: "${capitalize(name)}'s Controller Ready",
        });
    });

    /**
     * ---- Delete ${capitalize(name)} ----
     */
    static delete${capitalize(name)}: ControllerFunction = catchAsyncErrorHandle(async (
        _req: Request,
        res: Response,
        _next: NextFunction
    ) => {
        res.status(200).json({
            success: true,
            message: "${capitalize(name)}'s Controller Ready",
        });
    });
}

export default ${capitalize(name)}Controller;
`
        :
        `
const catchAsyncErrorHandle = require('../middleware/catchAsyncErrors');
const ${capitalize(name)}Service = require('../services/${name.toLocaleLowerCase()}.service');

class ${capitalize(name)}Controller {
    // Controlles of ${capitalize(name)}..
    /**
     * ---- Get All ${capitalize(name)}s ----
     */
    static get${capitalize(name)}s = catchAsyncErrorHandle(async (
        _req,
        res,
        _next
    ) => {
        res.status(200).json({
            success: true,
            message: "${capitalize(name)}'s Controller Ready",
        });
    });

    /**
     * ---- Get ${capitalize(name)} ----
     */
    static get${capitalize(name)} = catchAsyncErrorHandle(async (
        _req,
        res,
        _next
    ) => {
        res.status(200).json({
            success: true,
            message: "${capitalize(name)}'s Controller Ready",
        });
    });


    /**
     * ---- Create ${capitalize(name)} ----
     */
    static create${capitalize(name)} = catchAsyncErrorHandle(async (
        _req,
        res,
        _next
    ) => {
        res.status(200).json({
            success: true,
            message: "${capitalize(name)}'s Controller Ready",
        });
    });

    /**
     * ---- Update ${capitalize(name)} ----
     */
    static update${capitalize(name)} = catchAsyncErrorHandle(async (
        _req,
        res,
        _next
    ) => {
        res.status(200).json({
            success: true,
            message: "${capitalize(name)}'s Controller Ready",
        });
    });

    /**
     * ---- Delete ${capitalize(name)} ----
     */
    static delete${capitalize(name)} = catchAsyncErrorHandle(async (
        _req,
        res,
        _next
    ) => {
        res.status(200).json({
            success: true,
            message: "${capitalize(name)}'s Controller Ready",
        });
    });
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