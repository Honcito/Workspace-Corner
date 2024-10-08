import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateEmployeesPage } from './create-employees.page';

describe('CreateEmployeesPage', () => {
  let component: CreateEmployeesPage;
  let fixture: ComponentFixture<CreateEmployeesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEmployeesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
