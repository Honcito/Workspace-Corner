import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators'; // Importar tap para efectos secundarios

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  // Create endpoint
  private endpoint = 'http://localhost:8080/api/employees';
  
  // Crear un BehaviorSubject para almacenar la lista de empleados
  private employeesSubject = new BehaviorSubject<any[]>([]);
  employees$ = this.employeesSubject.asObservable(); // Observable que otros componentes pueden suscribirse

  // Constructor
  constructor(private httpClient: HttpClient) { }

  // Método para cargar empleados y actualizar el BehaviorSubject
  loadEmployees(): void {
    this.httpClient.get<any[]>(this.endpoint).subscribe(
      employees => {
        this.employeesSubject.next(employees); // Actualiza la lista de empleados en el BehaviorSubject
      },
      error => {
        console.error('Error loading employees:', error);
      }
    );
  }

  // Método para crear un empleado
  createEmployee(employee: any): Observable<any> {
    return this.httpClient.post(`${this.endpoint}`, employee).pipe(
      tap(() => this.loadEmployees()) // Actualiza la lista de empleados después de crear uno
    );
  }

  // Método para acceder a la lista de empleados
  getEmployees(): Observable<any> {
    return this.httpClient.get(this.endpoint);
  }

  // Método para eliminar un empleado
  delete(employeeId: number): Observable<any> {
    return this.httpClient.delete(`${this.endpoint}/${employeeId}`).pipe(
      tap(() => this.loadEmployees()) // Actualiza la lista de empleados después de eliminar uno
    );
  }
}
