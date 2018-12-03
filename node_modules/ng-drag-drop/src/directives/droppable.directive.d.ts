import { Subscription, Observable } from 'rxjs';
import { ElementRef, EventEmitter, OnInit, OnDestroy, Renderer2, NgZone } from '@angular/core';
import { DropEvent } from '../shared/drop-event.model';
import { NgDragDropService } from '../services/ng-drag-drop.service';
export declare class Droppable implements OnInit, OnDestroy {
    protected el: ElementRef;
    private renderer;
    private ng2DragDropService;
    private zone;
    /**
     *  Event fired when Drag dragged element enters a valid drop target.
     */
    onDragEnter: EventEmitter<any>;
    /**
     * Event fired when an element is being dragged over a valid drop target
     */
    onDragOver: EventEmitter<any>;
    /**
     * Event fired when a dragged element leaves a valid drop target.
     */
    onDragLeave: EventEmitter<any>;
    /**
     * Event fired when an element is dropped on a valid drop target.
     */
    onDrop: EventEmitter<DropEvent>;
    /**
     * CSS class that is applied when a compatible draggable is being dragged over this droppable.
     */
    dragOverClass: string;
    /**
     * CSS class applied on this droppable when a compatible draggable item is being dragged.
     * This can be used to visually show allowed drop zones.
     */
    dragHintClass: string;
    /**
     * Defines compatible drag drop pairs. Values must match both in draggable and droppable.dropScope.
     */
    dropScope: string | Array<string> | Function;
    /**
     * Defines if drop is enabled. `true` by default.
     */
    dropEnabled: boolean;
    /**
     * @private
     */
    dragStartSubscription: Subscription;
    /**
     * @private
     */
    dragEndSubscription: Subscription;
    /**
     * @private
     * Backing field for the dropEnabled property
     */
    _dropEnabled: boolean;
    /**
     * @private
     * Field for tracking drag state. Helps when
     * drag stop event occurs before the allowDrop()
     * can be calculated (async).
     */
    _isDragActive: boolean;
    /**
     * @private
     * Field for tracking if service is subscribed.
     * Avoids creating multiple subscriptions of service.
     */
    _isServiceActive: boolean;
    /**
     * @private
     * Function for unbinding the drag enter listener
     */
    unbindDragEnterListener: Function;
    /**
     * @private
     * Function for unbinding the drag over listener
     */
    unbindDragOverListener: Function;
    /**
     * @private
     * Function for unbinding the drag leave listener
     */
    unbindDragLeaveListener: Function;
    constructor(el: ElementRef, renderer: Renderer2, ng2DragDropService: NgDragDropService, zone: NgZone);
    ngOnInit(): void;
    ngOnDestroy(): void;
    dragEnter(e: any): void;
    dragOver(e: any, result: any): void;
    dragLeave(e: any): void;
    drop(e: any): void;
    allowDrop(): Observable<boolean>;
    subscribeService(): void;
    unsubscribeService(): void;
    unbindDragListeners(): void;
}
