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
import { BioRouterService } from '../bio-router.service';
var HomePageComponent = /** @class */ (function () {
    function HomePageComponent(serverRouter) {
        this.serverRouter = serverRouter;
        this.fileStructure = null;
        this.cardTitle = "Test Title";
        this.jobs = [];
        this.files = [];
        this.filesSizeTotal = 0;
        this.fileStrucure = [
            {
                type: 'folder',
                name: 'folder-A',
                folders: [],
                files: [
                    {
                        type: 'file',
                        id: '000',
                        name: 'FileA1.txt',
                        size: '2064',
                    },
                    {
                        type: 'file',
                        id: '000',
                        name: 'FileA2.txt',
                        size: '2064',
                    },
                ],
            },
            {
                type: 'file',
                id: '000',
                name: 'File1.txt',
                size: '2064',
            },
        ];
        this.storageUsed = 0;
        this.ngOnInit = function () {
        };
        this.fileToUpload = null;
        this.getJobs();
        this.getFiles();
        this.buildDirectory();
    }
    HomePageComponent.prototype.getJobs = function () {
        var _this = this;
        var token = localStorage.getItem('access_token');
        var sendItems = {
            token: token,
        };
        this.serverRouter.post('jobs/jobsList', sendItems).then(function (response) {
            console.log("Jobs List:");
            console.log(response);
            if (response['status'] == true) {
                var jobsList = [];
                for (var x in response['message']) {
                    var job = response['message'][x];
                    var jobStatus = "";
                    if (job["status"] == "INIT") {
                        jobStatus = "Waiting";
                    }
                    else if (job["status"] == "INPROCESS") {
                        jobStatus = "In Process";
                    }
                    else {
                        jobStatus = "Complete";
                    }
                    var start = new Date(job["start"]);
                    jobsList.push({
                        id: job["id"],
                        name: null,
                        script: job["scriptId"],
                        file: null,
                        began: start.getMonth() + "/" + start.getDate() + "/" + start.getFullYear(),
                        status: jobStatus,
                    });
                }
                _this.jobs = jobsList;
                console.log(_this.jobs);
            }
            else {
                _this.serverRouter.post('jobs/jobsList', token).then(function (response) {
                    console.log(response);
                    if (response['status'] == true) {
                        _this.jobs = response['message'];
                    }
                });
            }
        });
    };
    HomePageComponent.prototype.getFiles = function () {
        var _this = this;
        var token = localStorage.getItem('access_token');
        var sendItems = {
            token: token,
        };
        this.serverRouter.post('files/filesList', sendItems).then(function (response) {
            /*
            console.log("Files List:");
            console.log(response);
            */
            if (response['status'] == true) {
                var filesList = [];
                var fileSize = 0;
                for (var x in response['message']) {
                    var file = response['message'][x];
                    var start = new Date(file["createdAt"]);
                    filesList.push({
                        id: file["id"],
                        name: file["name"],
                        type: file["filetype"],
                        size: file["size"],
                        path: file['path'],
                        uploaded: start.getMonth() + "/" + start.getDate() + "/" + start.getFullYear(),
                    });
                    fileSize += file["size"];
                }
                _this.filesSizeTotal = fileSize;
                _this.files = filesList;
                //console.log(this.files);
            }
            else {
            }
        });
    };
    HomePageComponent.prototype.fileChangeEvent = function (fileInput) {
        var _this = this;
        this.fileToUpload = fileInput.target.files[0];
        this.serverRouter.upload(this.fileToUpload).then(function (result) {
            console.log(result);
            _this.getFiles();
        }, function (error) {
            console.error(error);
        });
    };
    HomePageComponent.prototype.buildDirectory = function () {
        var root = {
            name: localStorage.getItem('username'),
            root: true,
            isOpen: false,
            folders: [],
            files: [],
        };
        /*
        {
          name: 'F1'
          dir: [],
          files: [],
        }
        */
        var testInputs = [
            "F1_F2_test1.txt",
            "F1_test2.txt",
            "F2_test3.txt",
            "test4.txt",
        ];
        var testArray = [];
        for (var j in testInputs) {
            testArray.push(testInputs[j].split("_"));
        }
        for (var x = 0; x < testArray.length; x++) {
            var targetFolder = root;
            for (var y = 0; y < testArray[x].length; y++) {
                if (y != (testArray[x].length - 1)) {
                    var exists = null;
                    for (var z in targetFolder.folders) {
                        if (testArray[x][y] == targetFolder.folders[z].name) {
                            exists = z;
                        }
                    }
                    if (exists == null) {
                        //console.log('NEW FOLDER: '+testArray[x][y]+' in '+targetFolder.name);
                        targetFolder.folders.push({
                            name: testArray[x][y],
                            root: false,
                            isOpen: false,
                            folders: [],
                            files: [],
                        });
                        for (var z in targetFolder.folders) {
                            if (testArray[x][y] == targetFolder.folders[z].name) {
                                targetFolder = targetFolder.folders[z];
                            }
                        }
                    }
                    else {
                        targetFolder = targetFolder.folders[exists];
                    }
                }
                else {
                    //console.log('NEW FILE: '+testArray[x][y]+' in '+targetFolder.name);
                    targetFolder.files.push({
                        name: testArray[x][y]
                    });
                }
            }
        }
        console.log(root);
        this.fileStructure = root;
    };
    HomePageComponent.prototype.deleteFile = function (file) {
        console.log(file);
        // Send deleteFile request to backend.
        //    -Submit FileId.
        // Update directory from return.
    };
    HomePageComponent.prototype.moveFile = function (file, newFolder) {
        console.log(file);
        console.log(newFolder);
        // Send moveFile request to backend.
        //    -Submit FileId and new FileName.
        // Update directory from return.
    };
    HomePageComponent.prototype.runJob = function (file) {
        console.log(file);
    };
    HomePageComponent.prototype.createFolder = function (folder) {
        console.log(folder);
        // Send createFolder request to backend.
        //    -Submit folderName. ("F1/F2/null")
        // Update directory from return.
    };
    HomePageComponent.prototype.renameFolder = function (folder) {
        console.log(folder);
    };
    HomePageComponent.prototype.deleteFolder = function (folder) {
        console.log(folder);
        // Send deleteFolder request to backend.
        //    -Submit FileId
        // Update directory from return.
    };
    HomePageComponent = __decorate([
        Component({
            selector: 'app-home-page',
            templateUrl: './home-page.component.html',
            styleUrls: ['./home-page.component.css']
        }),
        __metadata("design:paramtypes", [BioRouterService])
    ], HomePageComponent);
    return HomePageComponent;
}());
export { HomePageComponent };
//# sourceMappingURL=home-page.component.js.map