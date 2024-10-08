import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateEmployeesPage } from './create-employees.page';

const routes: Routes = [
  {
    path: '',
    component: CreateEmployeesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateEmployeesPageRoutingModule {}
