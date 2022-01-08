import express from 'express';
import { RecadoRouter } from '../../features/recado/recado-routes';

export const makeRoutes = (app: express.Application) => {
    app.use('/recado', RecadoRouter.getRoutes());
}