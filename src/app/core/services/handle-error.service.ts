import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {ToastrService} from 'ngx-toastr'


@Injectable({
  providedIn: 'root'
})
export class HandleErrorService {

  constructor(private toast: ToastrService) { }

  public handleError(err: HttpErrorResponse){
    let errorMessage: string;
    if(err.error instanceof ErrorEvent){
      errorMessage = `Ocorreu um erro: ${err.error.message}`;
    }else{
      if(err.message){
        errorMessage =  `${err.message}`
      }else{
        errorMessage = `Ocorreu um erro`;
      }
    }

    this.toast.error(errorMessage);
  }
}
