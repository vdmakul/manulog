import { async, ComponentFixture, TestBed, tick, fakeAsync, flush } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { MaterialModule } from 'src/app/common/module/material/material.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule, NoopAnimationsModule],
      declarations: [ LoginComponent ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show existing login component on start', () => {
    expect(fixture.debugElement.query(By.css('app-existing-login'))).toBeTruthy();
  });

  it('should not show new login component at startup', () => {
    expect(fixture.debugElement.query(By.css('app-new-login'))).toBeNull();
  });

  // fixme: how to change material tab in tests and get the new shown component?
  // it('should show new login component on tab click', () => {
  //   const newLogingTab = fixture.debugElement.queryAll(By.css('.mat-tab-label'))[1];
  //   newLogingTab.nativeElement.click();
  //   fixture.detectChanges();
  //   expect(fixture.debugElement.query(By.css('app-new-login'))).toBeTruthy();
  // });
});
