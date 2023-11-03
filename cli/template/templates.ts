import { capitalize } from '../utils/text.util';


/**
 * ==== Model Template ====
 * @param name 
 * @returns 
 */
export const getModelTemplate = (name: string): string => (`
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
`);


/**
 * ==== Controller Template ====
 * @param name 
 * @returns 
 */
export const getControllerTemplate = (name: string): string => (`
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
`);


/**
 * ==== Route Template ====
 * @param name 
 * @returns 
 */
export const getRouteTemplate = (name: string): string => (`
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
`);


export const getServiceTemplate = (name: string): string => (`
// Service for ${capitalize(name)}
import ${capitalize(name)}, { I${capitalize(name)} } from '../models/${capitalize(name)}';

class ${capitalize(name)}Service {
    // ${capitalize(name)} Services..
}

export default ${capitalize(name)}Service;
`);