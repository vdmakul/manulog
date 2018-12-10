import { Injectable } from '@angular/core';
import { BrowserStorageService } from './browser-storage.service';
import { GitRepositoryService, GithubUser } from './git-repository.service';
import { Observable, Subject } from 'rxjs';
import { LoggerService } from './logger.service';

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
    private _gitRepositoryService: GitRepositoryService,
    private _logger: LoggerService
  ) { }

  public loginExisting() {
    const username = this._browserStorageService.get(MANULOG_USERNAME);
    const token = this._browserStorageService.get(MANULOG_USER_TOKEN);
    if (username && token) {
      this._logger.info(`Trying to login with existing user '${username}'`);
      this.login(username, token);
    } else {
      this._logger.info('No existing user for login');
    }
  }

  public login(username: string, token: string) {
    this._gitRepositoryService.login(token).subscribe((user: GithubUser) => {
      if (user.login === username) {
        this._logger.info(`Successfully login with user '${username}'`);
        this._browserStorageService.set(MANULOG_USERNAME, username);
        this._browserStorageService.set(MANULOG_USER_TOKEN, token);
        this._user$$.next(user);
      } else {
        this._logger.warn(`Fail to login for user ${username}`);
        this._user$$.next(null);
      }
    });
  }

  public logout() {
    this._logger.info('Successfully logout current user');
    this._browserStorageService.remove(MANULOG_USERNAME);
    this._browserStorageService.remove(MANULOG_USER_TOKEN);
    this._user$$.next(null);
  }
}
