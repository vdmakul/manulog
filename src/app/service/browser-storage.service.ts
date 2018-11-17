import { Injectable, Inject, InjectionToken } from '@angular/core';

export const BROWSER_STORAGE = new InjectionToken<Storage>('Browser Storage', {
  providedIn: 'root',
  factory: () => localStorage
});

@Injectable({
  providedIn: 'root'
})
export class BrowserStorageService {
  
  constructor(@Inject(BROWSER_STORAGE) public storage: Storage) {}
 
  get(key: string): string {
    return this.storage.getItem(key);
  }
 
  set(key: string, value: string) {
    this.storage.setItem(key, value);
  }
 
  remove(key: string) {
    this.storage.removeItem(key);
  }
 
  clear() {
    this.storage.clear();
  }
}
