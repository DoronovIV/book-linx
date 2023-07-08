import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Provider } from '@angular/core';
import { RequestInterceptor } from './request.interceptor';

export const HTTP_REQUEST_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  multi: true,
  useClass: RequestInterceptor,
};
