import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'; // Importa ReactiveFormsModule
import { HttpClientModule } from '@angular/common/http';

import { IonicModule } from '@ionic/angular';

import { CreateEmployeesPageRoutingModule } from './create-employees-routing.module';

import { CreateEmployeesPage } from './create-employees.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule, // Asegúrate de añadirlo aquí
    IonicModule,
    CreateEmployeesPageRoutingModule,
    HttpClientModule
  ],
  declarations: [CreateEmployeesPage]
})
export class CreateEmployeesPageModule {}
