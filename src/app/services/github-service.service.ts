import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GithubServiceService {
  username: any;
  repos: any;

  constructor(private http: HttpClient) { }
  getUser(user:any){
    return this.http.get("https://api.github.com/users/" + user + "?access-tokens=" + environment).pipe(((response:any)=> response));
  }
}
