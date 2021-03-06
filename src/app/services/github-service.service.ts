import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GithubServiceService {
  username: any;
  repos: any;

  constructor(private http: HttpClient) { }
  getUser(user: any){
    return this.http.get("https://github.com/settings/tokens/" + user+ "?access_token=" + environment.api_key)
    .pipe(((response:any)=>response));
  
  }
}
