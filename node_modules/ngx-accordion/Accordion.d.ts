import { QueryList, AfterContentInit, OnDestroy } from "@angular/core";
import { AccordionGroup } from "./AccordionGroup";
export declare class Accordion implements AfterContentInit, OnDestroy {
    closeOthers: boolean;
    showArrows: boolean;
    expandAll: boolean;
    groups: QueryList<AccordionGroup>;
    /**
     * We need to save old groups to make difference and find newly changed group, to toggle them.
     */
    private oldGroups;
    private subscription;
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    closeAll(): void;
}
