import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  getItem<T>(key: string): T {
    let result = null;
    result = localStorage.getItem(key);
    if (result != null && result !== 'undefined') {
      result = JSON.parse(result);
    }
    return result;
  }

  setItem<T>(key: string, value: T) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  removeItem<T>(key: string) {
    localStorage.removeItem(key);
  }

  removeAll<T>() {
    localStorage.clear();
  }
}
