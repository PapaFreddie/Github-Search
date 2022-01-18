import { Component, OnInit } from '@angular/core';
import { GithubServiceService } from 'src/app/services/github-service.service';




@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {
  username: any;
  gituser: any;

  getUserName(){
    this.service.getUser(this.username).subscribe((profile: any) =>{
      console.log(profile);
      return this.gituser = profile;
    });
  }

  constructor(private service:GithubServiceService) { }

  ngOnInit(): void {
  }

}
