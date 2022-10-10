import HospitalService from '../services/hospital.service'
class HospitalController {
    public hospitalService = new HospitalService();

    /**
     * @method hospital signup 
     */
    public hospitlaSignup= async(req:Request, res:Response)=>{
        try {

        }catch (error){
            console.log(error)
        }

    }
}
export default HospitalController;