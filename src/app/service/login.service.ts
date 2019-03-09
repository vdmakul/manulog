import { Injectable } from '@angular/core';
import { BrowserStorageService } from './browser-storage.service';
import { GitRepositoryService, GithubUser } from './git-repository.service';
import { Observable, Subject } from 'rxjs';
import { LoggerService } from './logger.service';
import { EncryptionService } from './encryption.service';

export const MANULOG_USERNAME = 'MANULOG_USERNAME';
export const MANULOG_USER_TOKEN = 'MANULOG_USER_TOKEN';
export const MANULOG_USER_TOKEN_ENCRYPTED = 'MANULOG_USER_TOKEN_ENCRYPTED';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private _user$$: Subject<GithubUser> = new Subject<GithubUser>();
  private user$: Observable<GithubUser> = this._user$$.asObservable();

  constructor(
    private _browserStorageService: BrowserStorageService,
    private _gitRepositoryService: GitRepositoryService,
    private _encryptionService: EncryptionService,
    private _logger: LoggerService
  ) { }

  public users$(): Observable<GithubUser> {
    return this.user$;
  }

  public loginCurrent() {
    const username = this._browserStorageService.get(MANULOG_USERNAME);
    const token = this._browserStorageService.get(MANULOG_USER_TOKEN);
    if (username && token) {
      this._logger.info(`Trying to login with existing user '${username}'`);
      this.login(username, token, false);
    } else {
      this._logger.info('No existing user for login');
    }
  }

  public loginExisting(username: string, localPassword: string) {
    const enryptedToken = this._browserStorageService.get(MANULOG_USER_TOKEN_ENCRYPTED);
    if (enryptedToken == null) {
      this._logger.warn(`No encrypted token is found in localStorage for user '${username}'`);
    } else {
      const token = this._encryptionService.decrypt(enryptedToken, localPassword);
      this._gitRepositoryService.login(token).subscribe((user: GithubUser) => {
        if (user.login === username) {
          this._logger.info(`Successfully login with user '${username}' and locally stored encrypted token`);
          this._user$$.next(user);
        } else {
          this._logger.warn(`Fail to login for user ${username} and locally stored encrypted token`);
          this._user$$.next(null);
        }
      },
      error => {
        this._logger.warn(`Failed to login for user ${username}: ${error}`);
        this._user$$.next(null);
      });
    }
  }

  public login(username: string, token: string, storeToken: boolean, localPassword?: string) {
    this._gitRepositoryService.login(token).subscribe((user: GithubUser) => {
      if (user.login === username) {
        this._logger.info(`Successfully login with user '${username}'`);
        this._browserStorageService.set(MANULOG_USERNAME, username);
        if (storeToken) {
          if (localPassword) {
            const encrypted = this._encryptionService.encrypt(token, localPassword);
            this._browserStorageService.set(MANULOG_USER_TOKEN_ENCRYPTED, encrypted);
            this._logger.info(`Encrypted password is stored locally`);
          } else {
            this._browserStorageService.set(MANULOG_USER_TOKEN, token);
            this._logger.info(`Plain password is stored locally`);
          }
        }
        this._user$$.next(user);
      } else {
        this._logger.warn(`Fail to login for user ${username}`);
        this._user$$.next(null);
      }
    });
  }

  public logout() {
    this._logger.info('Successfully logout current user');
    this._browserStorageService.remove(MANULOG_USER_TOKEN);
    this._user$$.next(null);
  }
}
