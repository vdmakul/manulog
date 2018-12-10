import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }

  get info() {
    if (!environment.production) {
      return console.info.bind(console);
    } else {
      return (): any => undefined;;
    }
  }

  get warn() {
    if (!environment.production) {
      return console.warn.bind(console);
    } else {
      return (): any => undefined;;
    }
  }

  get error() {
    if (!environment.production) {
      return console.error.bind(console);
    } else {
      return (): any => undefined;;
    }
  }

}
