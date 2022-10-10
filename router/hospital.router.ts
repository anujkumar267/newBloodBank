import HospitalController from '../controller/hospital.controller';
import Router from 'express';
class HospitalRoute {
    public path = '/';
    public router = new Router ();
    public hospitalController = new HospitalController();

    constructor() {
        this.intializeRoutes()
    }

    private intializeRoutes() {
        this.router.post(`${this.path}signup`, this.hospitalController.hospitlaSignup)
    }
}

export default HospitalRoute;