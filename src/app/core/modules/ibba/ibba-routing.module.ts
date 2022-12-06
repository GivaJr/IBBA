import { PoloDetailComponent } from './polo-detail/polo-detail.component';
import { ListPolesComponent } from './list-poles/list-poles.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{path:'', component: ListPolesComponent},
                        {path:'ibba/polo-detail/:id', component: PoloDetailComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IbbaRoutingModule { }
