import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileStructureBuilderComponent } from './file-structure-builder.component';

describe('FileStructureBuilderComponent', () => {
  let component: FileStructureBuilderComponent;
  let fixture: ComponentFixture<FileStructureBuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileStructureBuilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileStructureBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
