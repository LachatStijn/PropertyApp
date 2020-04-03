import { UserJson, User } from './user.model';
import { LocationJson, Location } from './location.model';
import { ReviewJson, Review } from './review.model';

interface PropertyJson {
    id:number;
    title: string;
    omschrijving: string;
    numbofbath: number;
    numbofbedr: number;
    numboftoil: number;
    parking: boolean;
    sold: boolean;
    leased: boolean;
    location: LocationJson;
    reviews: ReviewJson[];
    user: UserJson;
}
export class Property {
  private _id:number;
    constructor(
        private _title: string,
        private _omschrijving:string,
        private _numbofbath:number,
        private _numbofbedr:number,
        private _numboftoil:number,
        private _parking:boolean,
        private _sold:boolean,
        private _leased:boolean,
        private _location:Location,
        private _reviews: Array<Review>,
        private _user:User
    ){}

    static fromJson(json:PropertyJson):Property{
        const user = new User(json.user.email, json.user.fn,json.user.ln);
        const prop = new Property(
          json.title,
          json.omschrijving,
          json.numbofbath,
          json.numbofbedr,
          json.numboftoil,
          json.parking,
          json.sold,
          json.leased,
          Location.fromJson(json.location),
          json.reviews.map(Review.fromJson),
          User.fromJson(json.user));
        return prop;
    }

    toJSON(): PropertyJson {
      return <PropertyJson>{
        id:this.id,
        title:this.title,
        omschrijving:this.omschrijving,
        numbofbath:this.bathrooms,
        numbofbedr:this.bedrooms,
        numboftoil:this.toilets,
        parking:this.parking,
        sold:this.sold,
        leased:this.leased,
        location:this.location.toJson(),
        reviews:this.reviews.map(r => r.toJson()),
        user:this.author.toJson()
      }
    }

    get id(): number{
      return this._id;
    }

    get title(): string {
        return this._title;
    }
    get omschrijving(): string {
        return this._omschrijving;
      }
      get bathrooms(): number {
        return this._numbofbath;
      }
      get bedrooms(): number {
        return this._numbofbedr;
      }
      get toilets(): number {
        return this._numboftoil;
      }
      get parking(): boolean {
        return this._parking;
      }
      get sold(): boolean {
        return this._sold;
      }
      get leased(): boolean {
        return this._leased;
      }
      get available(): boolean {
        return (this.sold||this.leased?false:true)
      }
      get location() : Location {
        return this._location;
      }
      get reviews():Review[] {
        return this._reviews;
      }
      get author():User{
        return this._user;
      }

    addReview(review:string){
        //
    }


}