import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExistingLoginComponent } from './existing-login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/common/module/material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('ExistingLoginComponent', () => {
  let component: ExistingLoginComponent;
  let fixture: ComponentFixture<ExistingLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule, FormsModule, ReactiveFormsModule, NoopAnimationsModule, HttpClientModule],
      declarations: [ ExistingLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExistingLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
