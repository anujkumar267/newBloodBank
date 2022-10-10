export class HospitalSingupDto {
    public regitration_no: number;
    public hospital_name: string;
    public mobile_no: number;
    public email: string;
    public password: string;
    public pincode: number;
    public city: string;
    public address: string;
}

export class HospitalLoginDto {
    public regitration_no: number;
    public email: string;
    public password: string;
}