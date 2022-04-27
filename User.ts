export class User{
    private _name : string;
    private _email : string;
    private _role : number;
    constructor(name : string,role : number,email: string) {
        this._name = name;
        this._role = role;
        this._email = email;
    }
    getInfo(): string{
        return `name: ${this._name}, email: ${this._email}, role: ${this._role}`;
    }
    isAmin(): void{
        if(this._role === 1){
            console.log("admin");
        }
        if(this._role === 2){
            console.log("is normal User");
        }
    }

    get getName(): string {
        return this._name;
    }

    set setName(value: string) {
        this._name = value;
    }

    get getEmail(): string {
        return this._email;
    }

    set setEmail(value: string) {
        this._email = value;
    }

    get getRole(): number {
        return this._role;
    }

    set setRole(value: number) {
        this._role = value;
    }
}