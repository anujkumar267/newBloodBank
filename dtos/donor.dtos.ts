export class DonorSignupDto {
    public adharNumber: number;
    public firstName: string;
    public lastName: string;
    public email: string;
    public gender: string;
    public mobileNumber:  number;
    public password: string;
    public bloodGroup: string;
    public pincode: number;
    public city: string;
    public address: string;
}

export class DonorLoginDto {
    public adharNumber: number;
    public password: string;
}