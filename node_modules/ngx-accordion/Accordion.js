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
var core_1 = require("@angular/core");
var AccordionGroup_1 = require("./AccordionGroup");
var Accordion = (function () {
    function Accordion() {
        this.closeOthers = true;
        this.showArrows = false;
        this.expandAll = false;
    }
    Accordion.prototype.ngAfterContentInit = function () {
        var _this = this;
        if (this.expandAll) {
            this.closeOthers = false;
            this.oldGroups = this.groups.toArray();
            this.oldGroups.forEach(function (group) {
                group.openOnInitialization();
            });
            // we subscribe for changes, and if new groups are added we open them automatically
            this.subscription = this.groups.changes.subscribe(function (change) {
                var newGroups = _this.groups.toArray().filter(function (group) {
                    return _this.oldGroups.indexOf(group) === -1;
                });
                newGroups.forEach(function (group) {
                    group.openOnInitialization();
                });
                _this.oldGroups = _this.groups.toArray();
            });
        }
    };
    Accordion.prototype.ngOnDestroy = function () {
        if (this.subscription)
            this.subscription.unsubscribe();
    };
    Accordion.prototype.closeAll = function () {
        this.groups.toArray().forEach(function (group) {
            group.isOpened = false;
        });
    };
    return Accordion;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], Accordion.prototype, "closeOthers", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], Accordion.prototype, "showArrows", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], Accordion.prototype, "expandAll", void 0);
__decorate([
    core_1.ContentChildren(core_1.forwardRef(function () { return AccordionGroup_1.AccordionGroup; })),
    __metadata("design:type", core_1.QueryList)
], Accordion.prototype, "groups", void 0);
Accordion = __decorate([
    core_1.Component({
        selector: "accordion",
        template: "\n<div class=\"panel-group\" role=\"tablist\" aria-multiselectable=\"true\">\n    <ng-content></ng-content>\n</div>\n"
    })
], Accordion);
exports.Accordion = Accordion;
//# sourceMappingURL=Accordion.js.map