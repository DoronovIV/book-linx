import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  public set<T>(key: string, value: T): void {
    if (!this.get<T>(key)) {
      this.setForce(key, value);
    } else console.log('value', value, 'already present at local storage');
  }

  public setForce<T>(key: string, value: T): void {
    const stringyfiedString = JSON.stringify(value);

    localStorage.setItem(key, stringyfiedString);
  }

  public get<T>(key: string): T | null {
    const item = localStorage.getItem(key);

    if (!item) {
      return null;
    }

    const parsedItem = JSON.parse(item);

    return parsedItem;
  }
}
