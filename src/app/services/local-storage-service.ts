import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  getIdToken() {
    if (window.localStorage.hasOwnProperty('idToken')) {
      const idToken = window.localStorage.getItem('idToken');
      return idToken;
    }
    return false;
  }

  getLocalId() {
    if (window.localStorage.hasOwnProperty('localId')) {
      const localId = window.localStorage.getItem('localId');
      return localId;
    }
    return false;
  }

  logoutUserOut() {
    window.localStorage.clear();
  }
}
