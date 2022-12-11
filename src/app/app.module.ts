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
    SharedModule

  ],
  providers: [
    {provide: HTTP_INTERCEPTORS,
    useClass: IbbaInterceptor,
    multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
