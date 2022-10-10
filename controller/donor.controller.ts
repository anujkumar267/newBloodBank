import DonorService from "../services/donor.service";
import { DonorSignupDto } from '../dtos/donor.dtos'
class DonorController {
    public donorService = new DonorService();

    //sign up 
    public donorsignUp= async (req: Request, res: Response) =>{
        try {
             const donorData: DonorSignupDto = req.body;
            console.log(donorData)
        }catch (error){

        }
    }

}
export default DonorController;
