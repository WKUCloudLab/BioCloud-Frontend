import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BioRouterService } from './bio-router.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  loggedIn = false;
  error = null;

  constructor(
    private router: Router,
    public serverRouter: BioRouterService,
  ){ 
    this.serverRouter.get('users/checkSession').then( (response) => {
      if(response['status'] == true){
        console.log(response['message']);
        this.loggedIn = true;
        this.router.navigate(['home-page']);
      } else {
        console.log(response['message']);
        this.loggedIn = false;
        this.router.navigate(['']);
      }

      console.log(this.loggedIn);
    });
  }

  clearSession() {
    this.serverRouter.post('logout', null).then( (response) => {
      console.log(response);
      if(response['status'] == true){
        this.loggedIn = false
        this.router.navigate(['']);
      } else {
        this.error = response['message'];
      }
    });
  }
}
