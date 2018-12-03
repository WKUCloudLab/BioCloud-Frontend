import { Directive, ElementRef, HostListener } from '@angular/core';
import { DndState, } from '../services';
var DndNoDrag = (function () {
    function DndNoDrag(element, dndState) {
        this.element = element;
        this.dndState = dndState;
        this.draggableString = 'draggable';
        this.dragState = dndState.dragState;
        this.nativeElement = element.nativeElement;
        this.nativeElement.setAttribute(this.draggableString, 'true');
    }
    DndNoDrag.prototype.handleDragStart = function (event) {
        event = event['originalEvent'] || event;
        if (!event['_dndHandle']) {
            if (!(event.dataTransfer.types && event.dataTransfer.types.length)) {
                event.preventDefault();
            }
            event.stopPropagation();
        }
    };
    DndNoDrag.prototype.handleDragEnd = function (event) {
        event = event['originalEvent'] || event;
        if (!event['_dndHandle']) {
            event.stopPropagation();
        }
    };
    DndNoDrag.decorators = [
        { type: Directive, args: [{
                    selector: '[dndNoDrag]',
                },] },
    ];
    DndNoDrag.ctorParameters = function () { return [
        { type: ElementRef, },
        { type: DndState, },
    ]; };
    DndNoDrag.propDecorators = {
        "handleDragStart": [{ type: HostListener, args: ['dragstart', ['$event'],] },],
        "handleDragEnd": [{ type: HostListener, args: ['dragend', ['$event'],] },],
    };
    return DndNoDrag;
}());
export { DndNoDrag };
//# sourceMappingURL=dnd-nodrag.js.map