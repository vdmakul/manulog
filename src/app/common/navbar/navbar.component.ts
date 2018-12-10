import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';
import { GithubUser } from 'src/app/service/git-repository.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  user: GithubUser;

  constructor(private _loginService: LoginService) { }

  ngOnInit() {
    this._loginService.user$.subscribe(user => {
      this.user = user;
    });
  }

  public logout() {
    this._loginService.logout();
  }
}
