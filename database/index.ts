import Sequelize from 'sequelize';
import { NODE_ENV, DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_DATABASE } from '../config';

import HospitalModel from '../model/hospital.model';
import DonorModel from '../model/donor.model';
import ReceiverModle from '../model/hospital.model';

const sequelize = new Sequelize.Sequelize(DB_DATABASE,DB_USER,DB_PASSWORD,{
    dialect: 'mysql',
    host: DB_HOST,
});

sequelize
    .authenticate()
    .then(() => {
        console.log('Database connected.');
    })
    .catch(err => {
        console.log('Error in database connection: ', err);
    });

let DB: Object= {};

try {
    Donor: DonorModel(sequelize);
    Hospital: HospitalModel(sequelize);
    Receiver: ReceiverModle(sequelize);

}catch (error){
    console.log(error);
}

export default DB;