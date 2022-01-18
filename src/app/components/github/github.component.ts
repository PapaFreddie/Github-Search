import { Component, OnInit } from '@angular/core';
import { GithubServiceService } from 'src/app/services/github-service.service';
import { RepoServiceService } from 'src/app/services/repo-service.service';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {
  username: any;
  gituser: any;
  gitRepos: any;

  getUserName(){
    this.service.getUser(this.username).subscribe((details: any) =>{
      console.log(details);
      return this.gituser = details;
    });
  }

  getRepos(){
   this.fred['getRepo'](this.username).subscribe((details: any) =>{
     console.log(details);
     return this.gitRepos = details;
   })
  }

  constructor(private service: GithubServiceService, private fred: RepoServiceService) { }

  ngOnInit(): void {
  }

}
