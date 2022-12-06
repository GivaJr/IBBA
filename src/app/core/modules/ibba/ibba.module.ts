import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IbbaRoutingModule } from './ibba-routing.module';
import { ListPolesComponent } from './list-poles/list-poles.component';
import { PoloDetailComponent } from './polo-detail/polo-detail.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [ListPolesComponent, PoloDetailComponent],
  imports: [
    CommonModule,
    IbbaRoutingModule,
    SharedModule
  ]
})
export class IbbaModule { }
