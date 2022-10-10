import { Sequelize, DataTypes, Model, Optional, ForeignKey } from 'sequelize';
import { Hospital } from '../interface/hospital.interface';

export type HospitalCreationAttributes = Optional<
    Hospital,
    | 'id'
    | 'registration_number'
    | 'hospital_name'
    | 'mobile_no'
    | 'email'
    | 'password'
    | 'pincode'
    | 'city'
    | 'address'
>;

export class HospitalModel extends Model<Hospital, HospitalCreationAttributes> implements Hospital {
    public id: number;
    public registration_number: number;
    public hospital_name: string;
    public mobile_no: number;
    public email: string;
    public password: string;
    public pincode: number;
    public city: string;
    public address: string;
}

export default function (sequelize: Sequelize) {
    try {
        HospitalModel.init(
            {
                id: {
                    autoIncrement: true,
                    primaryKey: true,
                    type: DataTypes.INTEGER,
                },
                registration_number: {
                    allowNull: false,
                    type: DataTypes.INTEGER,
                    unique: true,
                },
                hospital_name: {
                    allowNull: false,
                    type: DataTypes.STRING(20),
                },
                mobile_no: {
                    allowNull: false,
                    type: DataTypes.INTEGER,
                    unique: true,
                },
                email: {
                    allowNull: false,
                    type: DataTypes.STRING,
                    unique: true,
                },
                password: {
                    allowNull: false,
                    type: DataTypes.STRING,
                    unique: true,
                },
                pincode: {
                    allowNull: false,
                    type: DataTypes.INTEGER,
                },
                city: {
                    allowNull: false,
                    type: DataTypes.INTEGER,
                },
                address: {
                    allowNull: false,
                    type: DataTypes.STRING
                },
            }, {
            tableName: 'hospital',
            sequelize,
            createdAt: 'createdAt',
            updatedAt: 'updatedAt',
        },

        )
    }
}