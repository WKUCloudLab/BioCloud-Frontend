"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var draggable_directive_1 = require("./directives/draggable.directive");
var droppable_directive_1 = require("./directives/droppable.directive");
var ng_drag_drop_service_1 = require("./services/ng-drag-drop.service");
var NgDragDropModule = /** @class */ (function () {
    function NgDragDropModule() {
    }
    NgDragDropModule.forRoot = function () {
        return {
            ngModule: NgDragDropModule,
            providers: [ng_drag_drop_service_1.NgDragDropService]
        };
    };
    NgDragDropModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [],
                    declarations: [
                        draggable_directive_1.Draggable,
                        droppable_directive_1.Droppable
                    ],
                    exports: [
                        draggable_directive_1.Draggable,
                        droppable_directive_1.Droppable
                    ]
                },] },
    ];
    return NgDragDropModule;
}());
exports.NgDragDropModule = NgDragDropModule;
//# sourceMappingURL=ng-drag-drop.module.js.map