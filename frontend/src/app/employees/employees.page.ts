import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Import employees service
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.page.html',
  styleUrls: ['./employees.page.scss'],
})
export class EmployeesPage implements OnInit {

  // employees array
  employees: any[] = []; // Arreglo de empleados correctamente declarado
  
  // Service in the constructor
  constructor(private employeeService: EmployeeService, private router: Router) { } // Inyección del Router

  ngOnInit() {
    this.employeeService.employees$.subscribe(employees => {
      this.employees = employees;
      console.log('Employees loaded:', this.employees);
    });
  
    // Carga inicial de empleados
    this.employeeService.loadEmployees();
  }
  // getAllEmployees method
  getAllEmployees() {
    this.employeeService.getEmployees().subscribe(response => {
      console.log('Fetched Employees:', response); // Para verificar la respuesta
      this.employees = response; // Asigna la respuesta a employees
      console.log('Employees loaded:', this.employees); // Verifica que se carguen los empleados
    }, error => {
      console.error('Error loading employees:', error); // Captura y muestra errores
    });
  }

  deleteEmployee(employeeId: number) {
    if (confirm('Are you sure you want to delete this employee?')) { // Confirmación
      this.employeeService.delete(employeeId).subscribe(
        () => {
          this.getAllEmployees(); // Actualiza la lista de empleados
          console.log('Employee deleted successfully');
        },
        (error) => {
          console.error('Error deleting employee:', error); // Manejo de errores
        }
      );
    } 
  }

  // gotoUpdateEmployee
  gotoUpdateEmployee(employeeId: number) {
    this.router.navigate(['/create-employees', { id: employeeId }]); // Usar router inyectado
  }
}
