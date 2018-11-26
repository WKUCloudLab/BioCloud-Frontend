import { Component, Input } from '@angular/core';

@Component({
  selector: 'file-structure',
  templateUrl: './file-structure-builder.component.html',
})
export class FileStructureBuilderComponent {
  @Input() structure;
}
