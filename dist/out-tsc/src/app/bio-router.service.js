var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
var BioRouterService = /** @class */ (function () {
    function BioRouterService(http) {
        this.http = http;
        this.serverURL = 'http://192.168.1.100:3001/';
    }
    BioRouterService.prototype.post = function (route, sendItems) {
        var _this = this;
        return new Promise(function (resolve) {
            var url = _this.serverURL + route;
            var options = null;
            //if(localStorage.getItem('header_token')){
            var headers = new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
            });
            options = { headers: headers };
            //}
            _this.http.post(url, sendItems, options)
                .subscribe(function (response) {
                resolve(response);
            }, function (err) {
                console.log(err);
                resolve(err);
            });
        });
    };
    BioRouterService.prototype.get = function (route) {
        var _this = this;
        return new Promise(function (resolve) {
            var url = _this.serverURL + route;
            _this.http.get(url)
                .subscribe(function (response) {
                resolve(response);
            }, function (err) {
                console.log(err);
                resolve(err);
            });
        });
    };
    BioRouterService.prototype.upload = function (file) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var url = _this.serverURL + 'upload';
            var formData = new FormData();
            var xhr = new XMLHttpRequest();
            formData.append('token', localStorage.getItem('access_token'));
            formData.append('upload', file, file.name);
            xhr.responseType = 'text';
            xhr.onload = function () {
                if (xhr.readyState === xhr.DONE) {
                    if (xhr.status === 200) {
                        resolve();
                        //console.log(xhr.response);
                        //console.log(xhr.responseText);
                    }
                }
            };
            xhr.open("POST", url, true);
            xhr.send(formData);
        });
    };
    BioRouterService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpClient])
    ], BioRouterService);
    return BioRouterService;
}());
export { BioRouterService };
//# sourceMappingURL=bio-router.service.js.map