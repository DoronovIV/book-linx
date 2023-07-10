import { Injectable } from '@angular/core';
import { User } from '../../../model/main/user.interface';
import { AuthorizationToken } from '../../../model/auxiliary/authorization-token.interface';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthorizationService {
  constructor(private readonly _storingService: LocalStorageService) {}

  public addToken(usr: User | null): void {
    if (usr) {
      // authorization token is valid for 24 hours;
      let tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);

      const token: AuthorizationToken = {
        userID: usr.id,
        expirationDate: tomorrow,
      };

      this._storingService.setForce('token', JSON.stringify(token));
    }
  }

  public getToken(): AuthorizationToken | null {
    return this._storingService.get<AuthorizationToken>('token');
  }
}
