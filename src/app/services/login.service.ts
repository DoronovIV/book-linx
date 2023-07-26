import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User as User } from '../pages/login/interfaces/user.interface';
import { User as ModelUser } from '../model/main/user.interface';
import { tap, catchError, EMPTY } from 'rxjs';
import { AuthorizationService } from './authorization.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private readonly _url = `users`;
  private _currentUserID!: string;

  public get currentUserID() {
    return this._currentUserID;
  }
  constructor(
    private readonly _http: HttpClient,
    private readonly _authorizationService: AuthorizationService,
    private readonly _router: Router,
  ) {}

  public async signIn(user: User): Promise<boolean> {
    let userList: ModelUser[] = [];
    let result = false;

    await this._http
      .get<ModelUser[]>(this._url)
      .pipe(
        tap((users) => {
          userList = users ?? [];

          if (userList) {
            const modelUser: ModelUser | undefined = userList.find((el) => {
              return user.login === el.login && user.password === el.password;
            });

            if (modelUser) {
              this._authorizationService.authorize(modelUser);
              this._router.navigateByUrl('/');
              result = true;
            } else {
              console.log('authorization fail');
              result = false;
            }
          }
        }),
        catchError((err: HttpErrorResponse) => {
          console.log(err.message);

          return EMPTY;
        }),
      )
      .toPromise();
    return result;
  }
}
