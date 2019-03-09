import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { ExistingLoginComponent } from './existing-login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/common/module/material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';
import { BrowserStorageService } from 'src/app/service/browser-storage.service';
import { MatInput } from '@angular/material';
import { Observable, of } from 'rxjs';

describe('ExistingLoginComponent', () => {
  let component: ExistingLoginComponent;
  let usernameInput: DebugElement;
  let passwordInput: DebugElement;
  let loginButton: DebugElement;
  let loginFailed: DebugElement;
  let fixture: ComponentFixture<ExistingLoginComponent>;

  let loginService: jasmine.SpyObj<LoginService>;
  let browserStorageService: jasmine.SpyObj<BrowserStorageService>;
  let getStorgaeSpy: jasmine.Spy;

  beforeEach(async(() => {
    loginService = jasmine.createSpyObj('LoginService', ['loginExisting', 'users$']);
    const usersOutput = of(null);
    loginService.users$.and.returnValue(usersOutput);

    browserStorageService = jasmine.createSpyObj('BrowserStorageService', ['get']);

    getStorgaeSpy = browserStorageService.get.and.returnValue('login');

    TestBed.configureTestingModule({
      imports: [MaterialModule, FormsModule, ReactiveFormsModule, NoopAnimationsModule, HttpClientModule],
      declarations: [ ExistingLoginComponent ],
      providers: [
        { provide: LoginService, useValue: loginService },
        { provide: BrowserStorageService, useValue: browserStorageService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExistingLoginComponent);
    component = fixture.componentInstance;
    usernameInput = fixture.debugElement.query(By.css('input.githubUser'));
    passwordInput = fixture.debugElement.query(By.css('input.localPassword'));
    loginButton = fixture.debugElement.query(By.css('button'));
    loginFailed = fixture.debugElement.query(By.css('h2.loginFailed'));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(usernameInput).toBeTruthy();
    expect(passwordInput).toBeTruthy();
    expect(loginButton).toBeTruthy();

    expect(loginService.users$.calls.count()).toBe(1,
      'users$ were subscribed');
  });

  it('should preplace previous login', () => {
    const userNameMatInput = usernameInput.injector.get<MatInput>(MatInput);
    expect(userNameMatInput.value).toBe('login');
  });

  // it('should fail to login with wrong password', () => {
  //   usernameInput.nativeElement.value = 'username';
  //   passwordInput.nativeElement.value = 'password';
  //   loginButton.nativeElement.click();
  //
  //   expect(loginService.loginExisting.calls.count()).toBe(1,
  //     'loginExisting was called once');
  //   expect(loginService.loginExisting.calls.mostRecent().args).toBe(['username', 'password'], '' +
  //     'username and password were passed to service');
  //
  //   // expect(loginFailed).toBeTruthy();
  // });

});
