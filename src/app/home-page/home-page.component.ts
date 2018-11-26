import { Component, OnInit } from '@angular/core';
import { BioRouterService } from '../bio-router.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  fileStructure = null;

  fileToUpload: File;
  
  cardTitle = "Test Title";

  jobs = [];

  files = [];
  filesSizeTotal = 0;

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

  constructor(
    public serverRouter: BioRouterService,
  ) { 
    this.fileToUpload = null;

    this.getJobs();
    this.getFiles();

    this.buildDirectory();
  }

  getJobs() {
    var token = localStorage.getItem('access_token');

    var sendItems = {
      token: token,
    }

    this.serverRouter.post('jobs/jobsList', sendItems).then( (response) => {
      /*
      console.log("Jobs List:");
      console.log(response);
      */

      if(response['status'] == true){
        var jobsList = [];

        for(var x in response['message']) {
          var job = response['message'][x];
      
          var jobStatus = "";
          if(job["status"] == "INIT") {
            jobStatus = "Waiting";
          } else if(job["status"] == "INPROCESS") {
            jobStatus = "In Process";
          } else {
            jobStatus = "Complete";
          }

          var start = new Date(job["start"]);

          jobsList.push({
            id: job["id"],
            name: null, // Need to record Job Name
            script: job["scriptId"],
            file: null, // Need to record File in Job
            began: start.getMonth()+"/"+start.getDate()+"/"+start.getFullYear(),
            status: jobStatus,
          });
        }

        this.jobs = jobsList;
      } else {

      }
    });
  }

  getFiles() {
    var token = localStorage.getItem('access_token');

    var sendItems = {
      token: token,
    }

    this.serverRouter.post('files/filesList', sendItems).then( (response) => {
      /*
      console.log("Files List:");
      console.log(response);
      */

      if(response['status'] == true){
        var filesList = [];
        var fileSize = 0;

        for(var x in response['message']) {
          var file = response['message'][x];

          var start = new Date(file["createdAt"]);

          filesList.push({
            id: file["id"],
            name: file["name"],
            type: file["filetype"],
            size: file["size"],
            path: file['path'],
            uploaded: start.getMonth()+"/"+start.getDate()+"/"+start.getFullYear(),
          });

          fileSize += file["size"];
        }

        this.filesSizeTotal = fileSize;
        this.files = filesList;
      } else {

      }
    });
  }

  fileChangeEvent(fileInput: any){
    this.fileToUpload = <File> fileInput.target.files[0];

    this.serverRouter.upload(this.fileToUpload).then( (result) => {
      console.log(result);
    }, (error) => {
      console.error(error);
    });
  }
  
  buildDirectory() {
    var root = {
      name: 'root',
      folders: [],
      files: [],
    }

    /*
    {
      name: 'F1'
      dir: [],
      files: [],
    }
    */

    var testInputs = [
      "F1_F2_test.txt",
      "F1_test.txt",
      "F2_test.txt",
      "test.txt",
    ];
    var testArray = [];

    for(var j in testInputs) {
      testArray.push(testInputs[j].split("_"));
    }

    for(var x = 0; x < testArray.length; x++) { 
      var targetFolder = root;
      for(var y = 0; y < testArray[x].length; y++) {

        if(y != (testArray[x].length - 1)) {
          var exists = null;
          for(var z in targetFolder.folders) {
            if(testArray[x][y] == targetFolder.folders[z].name) {
              exists = z;
            }
          }
          if(exists == null) {
            //console.log('NEW FOLDER: '+testArray[x][y]+' in '+targetFolder.name);
            targetFolder.folders.push({
              name: testArray[x][y],
              folders: [],
              files: [],
            });
            for(var z in targetFolder.folders) {
              if(testArray[x][y] == targetFolder.folders[z].name) {
                targetFolder = targetFolder.folders[z];
              }
            }
          } else {
            targetFolder = targetFolder.folders[exists];
          }
        } else {
          //console.log('NEW FILE: '+testArray[x][y]+' in '+targetFolder.name);
          targetFolder.files.push({
            name: testArray[x][y]
          });
        }
      }
    }

    //console.log(root);
    this.fileStructure = root;
  }

  ngOnInit() {
  }
}