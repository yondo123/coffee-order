import type { StorageKeys } from './StorageKeys';

class LocalStorageHelper {
  static get(key: StorageKeys) {
    return localStorage.getItem(key);
  }

  static set<T>(key: StorageKeys, value: T): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  static clear(): void {
    localStorage.clear();
  }
}

export default LocalStorageHelper;
