import { ElementRef, ChangeDetectorRef, EventEmitter } from "@angular/core";
import { Accordion } from "./Accordion";
export declare class AccordionGroup {
    accordion: Accordion;
    private cdr;
    heading: string;
    isOpened: boolean;
    onOpen: EventEmitter<{}>;
    onClose: EventEmitter<{}>;
    onToggle: EventEmitter<{}>;
    toggler: ElementRef;
    disabled: boolean;
    constructor(accordion: Accordion, cdr: ChangeDetectorRef);
    checkAndToggle(): void;
    toggle(): void;
    openOnInitialization(): void;
}
