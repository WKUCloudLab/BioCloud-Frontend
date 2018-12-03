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
var FileUploadComponent = /** @class */ (function () {
    function FileUploadComponent() {
        this.fileToUpload = null;
    }
    FileUploadComponent.prototype.upload = function () {
        this.makeFileRequest("http://192.168.1.100:3001/upload", this.fileToUpload).then(function (result) {
            console.log(result);
        }, function (error) {
            console.error(error);
        });
    };
    FileUploadComponent.prototype.fileChangeEvent = function (fileInput) {
        this.fileToUpload = fileInput.target.files[0];
    };
    FileUploadComponent.prototype.makeFileRequest = function (url, file) {
        return new Promise(function (resolve, reject) {
            var formData = new FormData();
            var xhr = new XMLHttpRequest();
            console.log(file);
            var username = localStorage.getItem('username');
            var token = localStorage.getItem('access_token');
            var sendItems = {
                username: username,
                token: token,
            };
            formData.append('token', localStorage.getItem('access_token'));
            formData.append('upload', file, file.name);
            console.log(formData);
            xhr.responseType = 'text';
            xhr.onload = function () {
                if (xhr.readyState === xhr.DONE) {
                    if (xhr.status === 200) {
                        console.log(xhr.response);
                        console.log(xhr.responseText);
                    }
                }
            };
            xhr.open("POST", url, true);
            xhr.send(formData);
        });
    };
    FileUploadComponent.prototype.ngOnInit = function () { };
    FileUploadComponent = __decorate([
        Component({
            selector: 'app-file-upload',
            templateUrl: './file-upload.component.html',
            styleUrls: ['./file-upload.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], FileUploadComponent);
    return FileUploadComponent;
}());
export { FileUploadComponent };
//# sourceMappingURL=file-upload.component.js.map