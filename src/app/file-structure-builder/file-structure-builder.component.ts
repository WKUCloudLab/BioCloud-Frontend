import { Component, Input } from '@angular/core';

import { HomePageComponent } from './../home-page/home-page.component';

@Component({
  selector: 'file-structure',
  templateUrl: './file-structure-builder.component.html',
})
export class FileStructureBuilderComponent {
  @Input() structure;

  constructor(
    public hp: HomePageComponent,
  ) { 
    
  }

  toggleFolder(folder) {
    if(folder.isOpen == true) {
      folder.isOpen = false;
    } else {
      folder.isOpen = true;
    }
  }
}
