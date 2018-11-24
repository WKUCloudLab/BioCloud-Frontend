import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BioRouterService } from './bio-router.service';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  loggedIn = false;
  navToggle = false;
  error = null;

  constructor(
    private auth: AuthService,
    private router: Router,
    public serverRouter: BioRouterService,
  ){ 
    if(localStorage.getItem('access_token') != null){
      this.loggedIn = true;
      this.router.navigate(['home-page']);
    } else {
      this.loggedIn = false;
      this.router.navigate(['']);
    }
  }

  logout() {
    this.auth.logout();
    this.loggedIn = false;
    this.router.navigate(['']);
  }

  toggleNav() {
    var x = document.getElementById("navBar");
    if (x.className == "bio-navbar-links") {
        x.className += " unhide";
    } else {
        x.className = "bio-navbar-links";
    }
  }

  hideNav() {
    var x = document.getElementById("navBar");
    x.className = "bio-navbar-links";
  }
}