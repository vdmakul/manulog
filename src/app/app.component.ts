import { Component, OnInit } from '@angular/core';
import { LoginService } from './service/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'manulog';

  constructor(private _loginService: LoginService) {}

  ngOnInit() {
    this._loginService.loginExisting();
  }

}
