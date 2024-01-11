import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SigInUser } from '../Models/sigInUser.model';
import {environment} from 'src/environment/environment';
import { Observable,throwError } from 'rxjs';
import { catchError,map } from 'rxjs/operators';
import { ErrorApiPettition } from '../Models/Error.Api.Model';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private URL:string = environment.URL;
  
  constructor(private httpClient:HttpClient) { }
  
  public sigIn(sigInUser:SigInUser):Observable<any>{
    console.log(this.URL)
    return this.httpClient.post(`${this.URL}/Auth/login`,sigInUser)
  }
}
