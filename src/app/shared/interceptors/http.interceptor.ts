import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpEvent,
  HttpResponse
} from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { LogLevel } from '@shared/models/enums';

@Injectable()
export class AMPInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const headers = req.headers.set('Content-Type', 'application/json');
    const authReq = req.clone({ headers });
    const started: number = Date.now();
    return next.handle(authReq).pipe(
      tap(event => {
        if (environment.logLevel !== LogLevel.Verbose) {
          return;
        }
        if (event instanceof HttpResponse) {
          const elapsed = Date.now() - started;
          console.log(`Request for ${req.urlWithParams} took ${elapsed} ms.`);
        }
      })
    );
  }
}
