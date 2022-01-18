import { Injectable } from '@angular/core';
import { GithubServiceService } from './github-service.service';

@Injectable({
  providedIn: 'root'
})
export class RepoServiceService {
  [x: string]: any;
  API = 'https://github.com/settings/tokens';
  token = '?access_token=';


  constructor(private service: GithubServiceService) { }
}
