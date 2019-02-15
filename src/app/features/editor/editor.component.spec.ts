import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorComponent } from './editor.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/common/module/material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { MarkdownModule } from 'ngx-markdown';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('EditorComponent', () => {
  let component: EditorComponent;
  let fixture: ComponentFixture<EditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule, HttpClientModule, FormsModule, MarkdownModule.forRoot(), NoopAnimationsModule],
      declarations: [ EditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
