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
import { BioRouterService } from './bio-router.service';
import { AuthService } from './auth.service';
var AppComponent = /** @class */ (function () {
    function AppComponent(auth, router, serverRouter) {
        this.auth = auth;
        this.router = router;
        this.serverRouter = serverRouter;
        this.loggedIn = false;
        this.navToggle = false;
        this.error = null;
        if (localStorage.getItem('access_token') != null) {
            console.log("Logged In");
            this.loggedIn = true;
            this.router.navigate(['home-page']);
        }
        else {
            console.log("Logged Out");
            this.loggedIn = false;
            this.router.navigate(['']);
        }
    }
    AppComponent.prototype.logout = function () {
        this.auth.logout();
        this.loggedIn = false;
        this.router.navigate(['']);
    };
    AppComponent.prototype.toggleNav = function () {
        var x = document.getElementById("navBar");
        if (x.className == "bio-navbar-links") {
            x.className += " unhide";
        }
        else {
            x.className = "bio-navbar-links";
        }
    };
    AppComponent.prototype.hideNav = function () {
        var x = document.getElementById("navBar");
        x.className = "bio-navbar-links";
    };
    AppComponent = __decorate([
        Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        }),
        __metadata("design:paramtypes", [AuthService,
            Router,
            BioRouterService])
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map