import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employees',
  templateUrl: './create-employees.page.html',
  styleUrls: ['./create-employees.page.scss'],
})
export class CreateEmployeesPage implements OnInit {

  employeeForm: FormGroup;
  employees: any [] = [];

  constructor(
    public formBuilder: FormBuilder,
    private employeeService: EmployeeService,
    private route: Router
    ) { 
      this.employeeForm = this.formBuilder.group({
        name: ['', [Validators.required, Validators.minLength(3)]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
      });
    }

  ngOnInit() {
    this.loadEmployees();
  }

  createEmployee() {
    if (this.employeeForm.valid) {
      console.log('Valid Form:', this.employeeForm.value);
      this.employeeService.createEmployee(this.employeeForm.value).subscribe(
        response => {
          console.log('Employee created successfully:', response);
          this.route.navigate(['/employees']); // Redirige a la lista de empleados
          // No necesitas llamar a loadEmployees() aquí, se llama automáticamente desde el servicio
        },
        error => {
          console.error('Error creating employee:', error);
        }
      );
    } else {
      console.log('Invalid Form.');
    }
  }

//loading employees method
loadEmployees() {
  this.employeeService.getEmployees().subscribe(
    employees => {
      console.log('Employees loaded:', employees);
      this.employees = employees; // Actualiza la lista de empleados
    },
    error => {
      console.error('Error loading employees:', error);
    }
  );
}


  getFormControl(field: string) {
    return this.employeeForm.get(field);
  }

}
