import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewLoginComponent } from './new-login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/common/module/material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('NewLoginComponent', () => {
  let component: NewLoginComponent;
  let fixture: ComponentFixture<NewLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule, FormsModule, ReactiveFormsModule, NoopAnimationsModule, HttpClientModule],
      declarations: [ NewLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
