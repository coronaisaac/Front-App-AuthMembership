export class AccessToken{
    _accessToken!: string;
    _refreshToken!: string;
    constructor(public accessToken: string, public refreshToken: string){
        this._accessToken = accessToken;
        this._refreshToken = refreshToken;
    }
}