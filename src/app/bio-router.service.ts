import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class BioRouterService {

  constructor(
    private http: HttpClient,
  ){ 

  }

  post(route, sendItems) {
    return new Promise((resolve) => {
      var url = 'http://192.168.1.100:3001/'+route;

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
      var url = 'http://192.168.1.100:3001/'+route;

      this.http.get( url )
        .subscribe( response => {
          resolve(response);
        },(err) => {
          console.log(err);
          resolve(err);
      });
    });
  }
}
