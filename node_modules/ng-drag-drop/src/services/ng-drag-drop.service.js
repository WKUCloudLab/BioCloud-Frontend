"use strict";
/**
 * Created by orehman on 2/22/2017.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var NgDragDropService = /** @class */ (function () {
    function NgDragDropService() {
        this.onDragStart = new rxjs_1.Subject();
        this.onDragEnd = new rxjs_1.Subject();
    }
    NgDragDropService.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    NgDragDropService.ctorParameters = function () { return []; };
    return NgDragDropService;
}());
exports.NgDragDropService = NgDragDropService;
//# sourceMappingURL=ng-drag-drop.service.js.map