import { Injectable } from '@angular/core';
import { BrowserStorageService } from './browser-storage.service';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

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
    return this._http.get<GithubUser>(GITHUB_API_URL + '/user', {headers: headers}).pipe(
      catchError(this._handleError)
    );
  }

  private _handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      return throwError(`An error occurred: ${error.error.message}`);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      return throwError(`Failed to login: ${error.error.message}`);
    }
  }
}

export class GithubUser {
  login: string;
  name: string;
  avatar_url: string;
  gists_url: string;
}
