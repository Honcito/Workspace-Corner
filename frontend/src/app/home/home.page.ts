import { Component } from '@angular/core';
// Import Router
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  name: string = "Floyd Pink";
  email: string = "pinkFloyd";

  // Add to the constructor
  constructor(private router: Router) {}

  // Add gotoEmployees method
  gotoEmployees() {
    this.router.navigateByUrl("/employees");
  }
}
