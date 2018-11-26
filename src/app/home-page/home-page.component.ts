import { Component, OnInit } from '@angular/core';
import { BioRouterService } from '../bio-router.service';
import { FileUploadComponent } from '../file-upload/file-upload.component';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  
  cardTitle = "Test Title";

  jobs = [
    /*
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
    */
  ]

  files = [
    /*
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
    */
  ];

  fileStrucure = [
    {
      type: 'folder',
      name: 'folder-A',
      folders: [

      ],
      files: [
        {
          type: 'file',
          id: '000',
          name: 'FileA1.txt',
          size: '2064',
        },
        {
          type: 'file',
          id: '000',
          name: 'FileA2.txt',
          size: '2064',
        },
      ],
    },
    {
      type: 'file',
      id: '000',
      name: 'File1.txt',
      size: '2064',
    },
  ];
  storageUsed = 0;

  constructor(
    public serverRouter: BioRouterService,
  ) { 
    var username = localStorage.getItem('username');
    var token = localStorage.getItem('access_token');

    var sendItems = {
      username: username,
      token: token,
    }



    this.serverRouter.post('jobs/jobsList', token).then( (response) => {
      console.log(response);
      if(response['status'] == true){
        this.jobs = response['message'];
      } 
    });

    this.serverRouter.post('files/filesList', token).then( (response) => {
      console.log(response);
      if(response['status'] == true){
        this.files = response['message'];
        for(let file of this.files){
          this.storageUsed += <number>file.size
        }
        this.storageUsed = this.storageUsed/1000
      } 
    });
  }

  ngOnInit() {
  }
}