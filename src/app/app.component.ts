import { Component, OnInit } from '@angular/core';
import { LoginService } from './service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private _loginService: LoginService, private _router: Router) {}

  ngOnInit() {
    this._loginService.users$().subscribe(user => {
      if (user == null) {
        this._router.navigate(['/login']);
      }
      if (user != null) {
        this._router.navigate(['/editor']);
      }
    });
    this._loginService.loginCurrent();
  }

}
