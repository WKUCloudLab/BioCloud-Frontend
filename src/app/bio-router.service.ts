import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

      this.http.post( url, sendItems , {headers:{'Content-Type':'application/json'}})
        .subscribe(response => {
          resolve(response);
        },(err) => {
          console.log(err);
      });
    });
  }
}
