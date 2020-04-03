export interface UserJson {
    fn:string,
    ln:string,
    email:string
}
export class User {
    constructor(
        private _email:string,
        private _fn:string,
        private _ln:string
    ){}

    static fromJson(json:UserJson):User{
        const user = new User(json.email,json.fn,json.ln);
        return user;
    }

    toJson(): UserJson{
        return <UserJson>{
            email:this.email,
            fn:this.fn,
            ln:this.ln
        }
        
    }

    get email(): string {
        return this._email;
    }
    get fn(): string {
        return this._fn;
      }
      get ln(): string {
        return this._ln;
      }


}