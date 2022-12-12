import { HttpErrorInterceptor } from './core/interceptors/http-error.interceptor';
import { CurrencyPipe } from './shared/pipes/currency.pipe';
import { CnpjPipe } from './shared/pipes/cnpj.pipe';
import { IbbaInterceptor } from './core/interceptors/ibba.interceptor';
import { IbbaModule } from './core/modules/ibba/ibba.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './core/components/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import {ToastrModule} from 'ngx-toastr'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    IbbaModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    ToastrModule.forRoot({
      positionClass:"toast-top-center",
      timeOut:8000
    })

  ],
  providers: [
    {provide: HTTP_INTERCEPTORS,
    useClass: IbbaInterceptor,
    multi:true},
    {provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi:true},
    CnpjPipe,
    CurrencyPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
