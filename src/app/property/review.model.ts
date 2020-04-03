import { User, UserJson } from './user.model';

export interface ReviewJson {
    id:number,
    author:UserJson,
    message:string,
}
export class Review {
    
    constructor(
        private _id: number,
        private _author:User,
        private _message:string,
    ){}

    static fromJson(json:ReviewJson):Review{
        const review = new Review(json.id,User.fromJson(json.author),json.message);
        return review;
    }

    toJson():ReviewJson{
        return <ReviewJson>{
            id:this.id,
            author:this.author.toJson(),
            message:this.message,
        }
    }

    get id(): number {
        return this._id;
    }
    get author(): User {
        return this._author;
      }
    get message(): string {
        return this._message;
    }


}