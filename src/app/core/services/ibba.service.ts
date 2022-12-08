import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IBusiness } from 'src/app/shared/models/IBusiness';
import { environment } from 'src/environments/environment';

const apiIBBA = environment.API

@Injectable({
  providedIn: 'root'
})
export class IbbaService {

  constructor(private http: HttpClient) { }


  getListPoles(){
     return this.http.get<[IBusiness]>(`${apiIBBA}`+'/v1/itau_teste' );
   }

  getDetailPoles(id:number){
    return this.http.get<IBusiness>(`${apiIBBA}`+ '/v1/itau_teste/'+ id)

  }
}

