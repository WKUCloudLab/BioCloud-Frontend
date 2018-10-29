import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  
  jobs = [
    {
      title: "Job Title 1",
      content: "Job Content 1. Lorem Ipsum.",
    },
    {
      title: "Job Title 2",
      content: "Job Content 2. Lorem Ipsum.",
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
