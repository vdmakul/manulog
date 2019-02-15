import { Injectable } from '@angular/core';
import { BrowserStorageService } from './browser-storage.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export const GITHUB_API_URL = 'https://api.github.com';

@Injectable({
  providedIn: 'root'
})
export class GitRepositoryService {

  constructor(
    private _browserStorageService: BrowserStorageService,
    private _http: HttpClient) { }

  private _currentUserToken(): string {
    return this._browserStorageService.get('USER_TOKEN');
  }

  public login(token: string): Observable<GithubUser> {
    const headers: HttpHeaders = new HttpHeaders()
        .append('Authorization', 'token ' + token)
        .append('Content-Type', 'application/x-www-form-urlencoded');
    return this._http.get<GithubUser>(GITHUB_API_URL + '/user', {headers: headers});
  }
}

export class GithubUser {
  login: string;
  name: string;
  avatar_url: string;
  gists_url: string;
}
