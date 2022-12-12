import { HandleErrorService } from './../services/handle-error.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

  constructor(private error:HandleErrorService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return new Observable((obs)=>{
      next.handle(request).subscribe(
        (res: HttpResponse<any>)=>{
          if(res instanceof HttpResponse){
            obs.next(res);
          }
        },
        (error: HttpErrorResponse)=>{
          this.error.handleError(error);
        }
      )
    })



  }
}
