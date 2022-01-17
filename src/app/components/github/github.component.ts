import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {
  username: any;
  gituser: any;
  gitRepos: any;
  service: any;
  fred: any;

  getUserName(){
    this.service.getUserName(this.username).subscribe(details =>{
      console.log(details);
      return this.gituser = details;
    });
  }

  getRepos(){
    this.fred.getRepo(this.username).subscribe(details =>{
      console.log(details);
      return this.gitRepos = details;
    });
  }

  constructor() { }

  ngOnInit(): void {
  }

}
