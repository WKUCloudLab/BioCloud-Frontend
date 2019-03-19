"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require("@angular/core");
var AccordionGroup_1 = require("./AccordionGroup");
var AccordionToggle = (function () {
    function AccordionToggle(accordionGroup) {
        this.accordionGroup = accordionGroup;
    }
    AccordionToggle.prototype.onClick = function () {
        this.accordionGroup.toggle();
    };
    return AccordionToggle;
}());
__decorate([
    core_1.HostListener("click"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AccordionToggle.prototype, "onClick", null);
AccordionToggle = __decorate([
    core_1.Component({
        selector: "accordion-toggle",
        template: "<ng-content></ng-content>"
    }),
    __param(0, core_1.Host()), __param(0, core_1.Inject(core_1.forwardRef(function () { return AccordionGroup_1.AccordionGroup; }))),
    __metadata("design:paramtypes", [AccordionGroup_1.AccordionGroup])
], AccordionToggle);
exports.AccordionToggle = AccordionToggle;
//# sourceMappingURL=AccordionToggle.js.map