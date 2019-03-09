import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { LoginService, MANULOG_USERNAME } from 'src/app/service/login.service';
import { BrowserStorageService } from 'src/app/service/browser-storage.service';
import { LoggerService } from 'src/app/service/logger.service';

@Component({
  selector: 'app-existing-login',
  templateUrl: './existing-login.component.html',
  styleUrls: ['./existing-login.component.scss']
})
export class ExistingLoginComponent implements OnInit {

  loginFromGroup: FormGroup;
  loginFailed: boolean;

  constructor(fb: FormBuilder,
     private _loginService: LoginService,
     private _browserStorageService: BrowserStorageService,
     private _logger: LoggerService) {
    this.loginFromGroup = fb.group({
      githubUser: ['', Validators.required],
      localPassword: ['', Validators.required]
    });
   }

  ngOnInit() {
    const username = this._browserStorageService.get(MANULOG_USERNAME);
    this._logger.info(`Pre-populating form with username '${username}'`);
    this.loginFromGroup.patchValue({githubUser: username});

    this._loginService.users$().subscribe(user => this.loginFailed = user == null);
  }

  public onSubmit(val): void {
    this.loginFailed = false;
    this._loginService.loginExisting(val.githubUser, val.localPassword);
  }

}
