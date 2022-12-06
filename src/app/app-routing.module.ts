import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPolesComponent } from './core/modules/ibba/list-poles/list-poles.component';

const routes: Routes = [
  { path: '', component: ListPolesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
