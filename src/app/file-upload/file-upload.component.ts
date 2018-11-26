import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {
  fileToUpload: File;

  constructor() {
    this.fileToUpload = null;
  }

  upload() {
    this.makeFileRequest("http://192.168.1.100:3001/upload", this.fileToUpload).then((result) => {
      console.log(result);
    }, (error) => {
      console.error(error);
    });
  }

  fileChangeEvent(fileInput: any){
    this.fileToUpload = <File> fileInput.target.files[0];
  }

  makeFileRequest(url: string, file: File) {
    return new Promise((resolve, reject) => {
      var formData: any = new FormData();
      var xhr = new XMLHttpRequest();

      console.log(file);
      var username = localStorage.getItem('username');
      var token = localStorage.getItem('access_token');

      var sendItems = {
        username: username,
        token: token,
      }

      formData.append('token', localStorage.getItem('access_token'));
      formData.append('upload', file, file.name);
      console.log(formData);
      
      xhr.responseType = 'text';
      
      xhr.onload = function () {
          if (xhr.readyState === xhr.DONE) {
              if (xhr.status === 200) {
                  console.log(xhr.response);
                  console.log(xhr.responseText);
              }
          }
      };

      xhr.open("POST", url, true);
      xhr.send(formData);
    });
  }

  ngOnInit() {}
}
