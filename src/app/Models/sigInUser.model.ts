export class SigInUser{
    email:string;
    password:string;
    /**
     *
     */
    constructor(Email:string,Password:string) {
        this.email = Email;
        this.password = Password
    }
}