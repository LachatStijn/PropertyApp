export interface LocationJson {
    number:number,
    street:string,
    district:string,
    postalcode:number,
}
export class Location {
    constructor(
        private _number: number,
        private _street:string,
        private _district:string,
        private _postalcode:number,
    ){}

    static fromJson(json:LocationJson):Location{
        const number = typeof json.number === 'string'?parseInt(json.number) : json.number;
        const postalcode = typeof json.postalcode === 'string'?parseInt(json.postalcode) : json.postalcode;
        const loc = new Location(number,json.street,json.district,postalcode);
        return loc;
    }

    toJson():LocationJson{
      return {number:this._number,street:this._street,district:this._district,postalcode:this._postalcode};
    }

    get number() {
        return this._number;
    }
    get street() {
        return this._street;
    }
    get district(){
      return this._district;
    }
      get postalcode() {
        return this._postalcode;
      }


}