var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
import { HomePageComponent } from './../home-page/home-page.component';
var FileStructureBuilderComponent = /** @class */ (function () {
    function FileStructureBuilderComponent(hp) {
        this.hp = hp;
    }
    FileStructureBuilderComponent.prototype.toggleFolder = function (folder) {
        if (folder.isOpen == true) {
            folder.isOpen = false;
        }
        else {
            folder.isOpen = true;
        }
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], FileStructureBuilderComponent.prototype, "structure", void 0);
    FileStructureBuilderComponent = __decorate([
        Component({
            selector: 'file-structure',
            templateUrl: './file-structure-builder.component.html',
        }),
        __metadata("design:paramtypes", [HomePageComponent])
    ], FileStructureBuilderComponent);
    return FileStructureBuilderComponent;
}());
export { FileStructureBuilderComponent };
//# sourceMappingURL=file-structure-builder.component.js.map