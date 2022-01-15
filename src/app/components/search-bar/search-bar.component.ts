import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  text!: string

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    if(!this.text){
      alert('Please enter repository name!')
    }
  }

}
