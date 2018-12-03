import { NgModule } from '@angular/core';
import { DndDraggable, DndHandle, DndList, DndNoDrag } from '../directives';
import { DndState } from '../services';
import { CommonModule } from '@angular/common';
var DndListModule = (function () {
    function DndListModule() {
    }
    DndListModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                    ],
                    exports: [
                        DndDraggable, DndHandle, DndList, DndNoDrag,
                    ],
                    entryComponents: [],
                    declarations: [DndDraggable, DndHandle, DndList, DndNoDrag],
                    providers: [
                        DndState,
                    ],
                },] },
    ];
    return DndListModule;
}());
export { DndListModule };
//# sourceMappingURL=module.js.map