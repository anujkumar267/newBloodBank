import { Router } from 'express';
import DonorController from '../controller/donor.controller';

class DonorRoute {
    public path = '/';
    public router = new Router();
    public donorController = new DonorController();

    constructor() {
        this.intializeRoutes();
    }

    private intializeRoutes() {
        this.router.post(`${this.path}signup`,this.donorController.donorsignUp)
        
    }
}