import { Request, Response, Router } from "express";
import { RecadoController } from "./recado-controller";

export class RecadoRouter {
    static getRoutes() {
        const routes = Router();
        const controller = new RecadoController();

        routes.get('/', (req: Request, res: Response) => controller.list(req, res));
        
        routes.post('/', (req: Request, res: Response) => controller.create(req, res));

        routes.put('/:uid', (req: Request, res: Response) => controller.update(req, res));

        routes.delete('/:uid', (req: Request, res: Response) => controller.delete(req, res));

        return routes;
    }
}