var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BioRouterService } from '../bio-router.service';
import { AuthService } from '../auth.service';
import { AppComponent } from '../app.component';
import { first } from 'rxjs/operators';
var LoginComponent = /** @class */ (function () {
    function LoginComponent(auth, router, serverRouter, appComp) {
        this.auth = auth;
        this.router = router;
        this.serverRouter = serverRouter;
        this.appComp = appComp;
        this.title = 'BioCloud';
        this.username = '';
        this.password = '';
        this.error = null;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        if (this.username != '' && this.password != '') {
            this.error = null;
            this.auth.login(this.username, this.password)
                .pipe(first())
                .subscribe(function (response) {
                console.log(response);
                if (response['status'] == true) {
                    _this.appComp.loggedIn = true;
                    _this.router.navigate(['home-page']);
                }
                else {
                    if (response['message'] == "NO_USER_FOUND") {
                        _this.error = "Invalid Username/Password";
                    }
                    else {
                        _this.error = response['message'];
                    }
                }
            }, function (err) {
                _this.error = err;
            });
        }
        else {
            this.error = "Username and Password cannot be empty.";
        }
    };
    LoginComponent = __decorate([
        Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css']
        }),
        __metadata("design:paramtypes", [AuthService,
            Router,
            BioRouterService,
            AppComponent])
    ], LoginComponent);
    return LoginComponent;
}());
export { LoginComponent };
//# sourceMappingURL=login.component.js.map