export class ReceiverSignupDto {
    public adharnumber: number;
    public firstName: string;
    public lastName: string;
    public mobileNumber: number;
    public email: string;
    public bloodGroup: string;
    public pincode: number;
    public city: string;
    public address: string;
    public password: string;
}

export class ReceiverLoginDto {
    public adharNumber: number;
public email: string;
    public password: string;
}