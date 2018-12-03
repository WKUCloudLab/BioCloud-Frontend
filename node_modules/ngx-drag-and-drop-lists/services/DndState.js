import { Injectable } from '@angular/core';
import { ALL_EFFECTS } from '../index';
var DndState = (function () {
    function DndState() {
        this.dragState = {
            isDragging: false,
            itemType: undefined,
            dropEffect: 'none',
            effectAllowed: ALL_EFFECTS[0],
        };
    }
    DndState.prototype.filterEffects = function (effects, effectAllowed) {
        if (effectAllowed === 'all')
            return effects;
        return effects.filter(function (effect) {
            return effectAllowed.toLowerCase().indexOf(effect) !== -1;
        });
    };
    DndState.decorators = [
        { type: Injectable },
    ];
    return DndState;
}());
export { DndState };
//# sourceMappingURL=DndState.js.map