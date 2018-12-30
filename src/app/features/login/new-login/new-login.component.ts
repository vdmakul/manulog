import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-new-login',
  templateUrl: './new-login.component.html',
  styleUrls: ['./new-login.component.scss']
})
export class NewLoginComponent implements OnInit {

  loginFromGroup: FormGroup;

  constructor(fb: FormBuilder, private _loginService: LoginService) {
    this.loginFromGroup = fb.group({
      storeToken: false,
      githubUser: ['', Validators.required],
      token: ['', Validators.required],
      localPassword: ['']
    });
   }

  ngOnInit() {
  }

  public onSubmit(val): void {
    this._loginService.login(val.githubUser,  val.token, val.storeToken, val.localPassword);
  }


}
