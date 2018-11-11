import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BioRouterService } from '../bio-router.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  title = 'Bio-Cloud';
  username = '';
  email = '';
  firstName = '';
  lastName = '';
  password = '';
  passwordConfirmed = '';

  error = null;

  constructor(
    private router: Router,
    public serverRouter: BioRouterService,
  ){ 

  }

  ngOnInit() {
  }

  register() {
    if(this.username != '' && this.password != ''){
      if(this.password == this.passwordConfirmed){
        this.error = null;

        var sendItems = {
          username: this.username,
          email: this.email,
          firstname: this.firstName,
          lastname: this.lastName,
          password: this.password,
        };
        this.serverRouter.post('register', sendItems).then( (response) => {
          console.log(response);
          if(response['status'] == true){
            this.router.navigate(['']);
          } else {
            if(response['message'] == "USERNAME_EMAIL_UNAVAILABLE") {
              this.error = "Username or Email is already in use."
            } else {
              this.error = response['message'];
            }
          }
        });
      } else {
        this.error = "Password and Confirmation do not match."
      }
    } else {
      this.error = "Username and Password cannot be empty."
    }
  }
}
