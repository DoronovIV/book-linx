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

  constructor(
    private readonly _http: HttpClient,
    private readonly _authorizationService: AuthorizationService,
    private readonly _router: Router,
  ) {}

  public async getUserByID(id: string): Promise<ModelUser | undefined> {
    let user!: ModelUser | undefined;
    await this._http
      .get<ModelUser[]>(this._url)
      .pipe(
        tap((users) => {
          user = users.find((usr) => usr.id === id);
        }),
      )
      .toPromise();

    return user;
  }

  public signIn(user: User): void {
    let userList: ModelUser[] = [];

    this._http
      .get<ModelUser[]>(this._url)
      .pipe(
        tap((users) => {
          userList = users ?? [];

          if (userList) {
            let success = false;
            let modelUser: ModelUser | null = null;
            userList.forEach((el) => {
              let condition = user.login === el.login && user.password === el.password;
              if (condition) {
                success = condition;
                modelUser = el;
              }
            });

            if (success) {
              this._authorizationService.authorize(modelUser);
              this._router.navigateByUrl('/');
            } else {
              console.log('authorization fail');
            }
          }
        }),
        catchError((err: HttpErrorResponse) => {
          console.log(err.message);

          return EMPTY;
        }),
      )
      .subscribe();
  }
}
