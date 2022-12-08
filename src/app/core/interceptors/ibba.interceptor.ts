import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IBusiness } from 'src/app/shared/models/IBusiness';


@Injectable()
export class IbbaInterceptor implements HttpInterceptor {

  tokenFake = 'PpdopMUNNnopy29UTFy%v$7F@NDwrwxJkKYejQ8e'
  constructor() {}

  intercept(request: HttpRequest<IBusiness>, next: HttpHandler): Observable<HttpEvent<IBusiness>> {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + this.tokenFake,
      })
    }
    const reqClone = request.clone(httpOptions)
    return next.handle(reqClone).pipe(
      catchError((error: any) => {
        return throwError(error);
      })
    );
  }
}
