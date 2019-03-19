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
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(router, serverRouter) {
        this.router = router;
        this.serverRouter = serverRouter;
        this.title = 'BioCloud';
        this.username = '';
        this.email = '';
        this.firstName = '';
        this.lastName = '';
        this.password = '';
        this.passwordConfirmed = '';
        this.error = null;
    }
    RegisterComponent.prototype.register = function () {
        var _this = this;
        if (this.username != '' &&
            this.email != '' &&
            this.firstName != '' &&
            this.lastName != '' &&
            this.password != '' &&
            this.passwordConfirmed != '') {
            if (this.password == this.passwordConfirmed) {
                this.error = null;
                var sendItems = {
                    username: this.username,
                    email: this.email,
                    firstname: this.firstName,
                    lastname: this.lastName,
                    password: this.password,
                };
                this.serverRouter.post('register', sendItems).then(function (response) {
                    console.log(response);
                    if (response['status'] == true) {
                        _this.router.navigate(['']);
                    }
                    else {
                        if (response['message'] == "USERNAME_EMAIL_UNAVAILABLE") {
                            _this.error = "Username or Email is already in use.";
                        }
                        else {
                            _this.error = response['message'];
                        }
                    }
                });
            }
            else {
                this.error = "Passwords do not match.";
            }
        }
        else {
            this.error = "Please complete the entire form before submitting.";
        }
    };
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = __decorate([
        Component({
            selector: 'app-register',
            templateUrl: './register.component.html',
            styleUrls: ['./register.component.css']
        }),
        __metadata("design:paramtypes", [Router,
            BioRouterService])
    ], RegisterComponent);
    return RegisterComponent;
}());
export { RegisterComponent };
//# sourceMappingURL=register.component.js.map