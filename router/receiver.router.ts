import { Router } from 'express';
import ReceiverController from '../controller/receiver.controller';

class ReceiverRoute {
    public path = '/';
    public router = new Router();
    public receiverController = new ReceiverController();

    constructor() {
        this.intializeRoutes()
    }

    private intializeRoutes() {
        this.router.post(`${this.path}signup`, this.receiverController.receiverSignup)
    }
}

export default ReceiverRoute;