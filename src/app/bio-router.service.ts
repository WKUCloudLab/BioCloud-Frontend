import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class BioRouterService {

  serverURL = 'http://192.168.1.100:3001/';

  constructor(
    private http: HttpClient,
  ){ 

  }

  post(route, sendItems) {
    return new Promise((resolve) => {
      var url = this.serverURL+route;

      let options = null;
      //if(localStorage.getItem('header_token')){
        let headers = new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'Bearer '+localStorage.getItem('access_token'),
        });
        options = { headers: headers };
      //}

      this.http.post( url, sendItems, options )
        .subscribe(response => {
          resolve(response);
        },(err) => {
          console.log(err);
          resolve(err);
      });
    });
  }

  get(route) {
    return new Promise((resolve) => {
      var url = this.serverURL+route;

      this.http.get( url )
        .subscribe( response => {
          resolve(response);
        },(err) => {
          console.log(err);
          resolve(err);
      });
    });
  }

  upload(file: File) {
    return new Promise((resolve, reject) => {
      var url = this.serverURL+'upload';

      var formData: any = new FormData();
      var xhr = new XMLHttpRequest();

      formData.append('token', localStorage.getItem('access_token'));
      formData.append('upload', file, file.name);
      
      xhr.responseType = 'text';
      
      xhr.onload = function () {
          if (xhr.readyState === xhr.DONE) {
              if (xhr.status === 200) {
                resolve();
                  //console.log(xhr.response);
                  //console.log(xhr.responseText);
              }
          }
      };

      xhr.open("POST", url, true);
      xhr.send(formData);
    });
  }
}
