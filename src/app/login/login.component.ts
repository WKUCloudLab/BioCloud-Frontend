import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BioRouterService } from '../bio-router.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = 'Bio-Cloud';
  username = '';
  password = '';

  error = null;

  constructor(
    private router: Router,
    public serverRouter: BioRouterService,
  ){ 

  }

  ngOnInit() {
  }

  login() {
    if(this.username != '' && this.password != ''){
      this.error = null;

      var sendItems = {
        username: this.username,
        password: this.password,
      };
      this.serverRouter.post('login', sendItems).then( (response) => {
        console.log(response);
        if(response['status'] == true){
          this.router.navigate(['home-page']);
        } else {
          this.error = response['message'];
        }
      });
    } else {
      this.error = "Username and Password cannot be empty."
    }
  }
}
