import { Injectable } from '@angular/core';
import { User } from '../model/main/user.interface';
import { AuthorizationToken } from '../model/auxiliary/authorization-token.interface';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthorizationService {
  private _authorized = false;
  private readonly _storageKey = 'at';

  private _userLogin!: string;

  public get userLogin() {
    return this._userLogin;
  }

  public get authorized() {
    if (!this._authorized) {
      let token = this.getToken();
      const dateNow = new Date();

      if (token) {
        if (new Date(token.expirationDate).getTime() > dateNow.getTime()) {
          this._authorized = true;
        }
      }
    }

    return this._authorized;
  }

  constructor(private readonly _storingService: LocalStorageService) {}

  public authorize(user: User | null) {
    this.addToken(user);
    this._authorized = true;
    this._userLogin = user?.login ?? '';
  }

  public addToken(usr: User | null): void {
    if (usr) {
      // authorization token is valid for 24 hours;
      let tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);

      const token: AuthorizationToken = {
        userID: usr.id,
        userLogin: usr.login,
        expirationDate: tomorrow,
      };

      this._storingService.setForce(this._storageKey, token);
    }
  }

  public getToken(): AuthorizationToken | null {
    const token = this._storingService.get<AuthorizationToken>(this._storageKey);
    this._userLogin = token?.userLogin ?? '';
    return token;
  }

  private _removeToken() {
    const zeroToken: AuthorizationToken = {
      userID: '-1',
      userLogin: 'None',
      expirationDate: new Date(0),
    };

    this._storingService.setForce<AuthorizationToken>(this._storageKey, zeroToken);
  }

  public signOut() {
    this._removeToken();
    this._authorized = false;
  }
}
