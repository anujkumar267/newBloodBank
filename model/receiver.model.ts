import { Sequelize, DataTypes, Model, Optional } from 'sequelize';
import { Receiver } from '../interface/receiver.interface';

export type ReceiverCreationAttributes = Optional<
Receiver,
    | 'id'
    | 'adhaar_number'
    | 'first_name'
    | 'last_name'
    | 'gender'
    | 'email'
    | 'mobile_number'
    | 'password'
    | 'blood_group'
    | 'pincode'
    | 'city'
    | 'address'
>;

export class ReceiverModel extends Model<Receiver, ReceiverCreationAttributes> implements Receiver {
    public id: number;
    public adhaar_number: number;
    public first_name: string;
    public last_name: string;
    public email: string;
    public gender: string;
    public mobile_number: number;
    public password: string;
    public blood_group: string;
    public pincode: number;
    public city: string;
    public address: string;
}

export default function (sequelize: Sequelize) {
    try {
        ReceiverModel.init(
            {
                id: {
                    autoIncrement: true,
                    primaryKey: true,
                    type: DataTypes.INTEGER,
                },
                adhaar_number: {
                    allowNull: false,
                    type: DataTypes.INTEGER,
                    unique: true,
                },
                first_name: {
                    allowNull: false,
                    type: DataTypes.STRING(50),
                },
                last_name: {
                    allowNull: true,
                    type: DataTypes.STRING(50),
                },
                email: {
                    allowNull: false,
                    type: DataTypes.STRING(7),
                    defaultValue: null,
                },
                gender: {
                    allowNull: false,
                    type: DataTypes.STRING(20),
                },
                mobile_number: {
                    allowNull: false,
                    type: DataTypes.INTEGER,
                    unique: true,
                },
                password: {
                    allowNull: false,
                    type: DataTypes.STRING,
                    unique: true,
                },
                blood_group: {
                    allowNull: false,
                    type: DataTypes.STRING(10)
                },
                pincode: {
                    allowNull: false,
                    type: DataTypes.NUMBER,
                },
                city: {
                    allowNull: false,
                    type: DataTypes.STRING(20),
                },
                address: {
                    allowNull: false,
                    type: DataTypes.STRING(50),
                },
            },
            {
                tableName: 'receiver',
                sequelize,
                timestamps: true,
                createdAt: 'createdAt',
                updatedAt: 'updatedAt',
            },
        )
    } catch (error) {
        console.log(error)
    }

    return ReceiverModel;
}