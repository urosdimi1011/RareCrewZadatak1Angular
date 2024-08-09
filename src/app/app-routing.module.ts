import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesTableComponent } from './pages/employees-table/employees-table.component';

const routes: Routes = [
  { path: '', redirectTo: 'employees-table', pathMatch: 'full' },
  { path: 'employees-table', component: EmployeesTableComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
