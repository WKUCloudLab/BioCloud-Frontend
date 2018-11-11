import { Component, OnInit } from '@angular/core';
import { BioRouterService } from '../bio-router.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  
  cardTitle = "Test Title";

  jobs = [
    {
      name: "Job Title 1",
      script: "FastQC",
      file: "File1.txt",
      began: "09/09/1990",
      status: "Waiting",
    },
    {
      name: "Job Title 2",
      script: "FastQC",
      file: "File1.txt",
      began: "09/09/1990",
      status: "In Progress",
    },
    {
      name: "Job Title 3",
      script: "FastQC",
      file: "File1.txt",
      began: "09/09/1990",
      status: "Complete",
    },
    {
      name: "Job Title 4",
      script: "FastQC",
      file: "File1.txt",
      began: "09/09/1990",
      status: "In Progress",
    },
  ]

  files = [
    {
      name: 'File1.txt',
      type: 'txt',
      size: '2064',
      uploaded: '09/09/1990'
    },
    {
      name: 'File2.txt',
      type: 'txt',
      size: '2064',
      uploaded: '09/09/1990'
    },
    {
      name: 'File3.txt',
      type: 'txt',
      size: '2064',
      uploaded: '09/09/1990'
    },
    {
      name: 'File4.txt',
      type: 'txt',
      size: '2064',
      uploaded: '09/09/1990'
    },
    {
      name: 'File5.txt',
      type: 'txt',
      size: '2064',
      uploaded: '09/09/1990'
    },
  ];

  constructor(
    public serverRouter: BioRouterService,
  ) { 
    /*
    this.serverRouter.get('createJob').then( (response) => {
      console.log(response);
      if(response['status'] == true){

      } else {

      }
    });
    */
  }

  ngOnInit() {
  }

}
