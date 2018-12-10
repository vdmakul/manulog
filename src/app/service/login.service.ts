import { Injectable } from '@angular/core';
import { BrowserStorageService } from './browser-storage.service';
import { GitRepositoryService, GithubUser } from './git-repository.service';
import { Observable, Subject } from 'rxjs';

export const MANULOG_USERNAME = 'MANULOG_USERNAME';
export const MANULOG_USER_TOKEN = 'MANULOG_USER_TOKEN';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private _user$$: Subject<GithubUser> = new Subject<GithubUser>();
  public user$: Observable<GithubUser> = this._user$$.asObservable();

  constructor(
    private _browserStorageService: BrowserStorageService,
    private _gitRepositoryService: GitRepositoryService
  ) { }

  public loginExisting() {
    const username = this._browserStorageService.get(MANULOG_USERNAME);
    const token = this._browserStorageService.get(MANULOG_USER_TOKEN);
    if (username && token) {
      this.login(username, token);
    }
  }

  public login(username: string, token: string) {
    this._gitRepositoryService.login(token).subscribe((user: GithubUser) => {
      if (user.login === username) {
        this._browserStorageService.set(MANULOG_USERNAME, username);
        this._browserStorageService.set(MANULOG_USER_TOKEN, token);
        this._user$$.next(user);
      } else {
        this._user$$.next(null);
      }
    });
  }

  public logout() {
    this._browserStorageService.remove(MANULOG_USERNAME);
    this._browserStorageService.remove(MANULOG_USER_TOKEN);
    this._user$$.next(null);
  }
}
