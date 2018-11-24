import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BioRouterService } from '../bio-router.service';
import { AuthService } from '../auth.service';
import { AppComponent } from '../app.component';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = 'BioCloud';
  username = '';
  password = '';

  error = null;

  constructor(
    private auth: AuthService,
    private router: Router,
    public serverRouter: BioRouterService,
    private appComp : AppComponent,
  ){ 

  }

  ngOnInit() {
  }

  login() {
    if(this.username != '' && this.password != ''){
      this.error = null;

      this.auth.login(this.username, this.password)
      .pipe(first())
      .subscribe(
        response => {
          console.log(response);
          if(response['status'] == true){
            this.appComp.loggedIn = true;
            this.router.navigate(['home-page']);
          } else {
            if(response['message'] == "NO_USER_FOUND") {
              this.error = "Invalid Username/Password";
            } else {
              this.error = response['message'];
            }
          }
        },
        err => {
          this.error = err
        }
      );
    } else {
      this.error = "Username and Password cannot be empty."
    }
  }
}
