import { Component, OnInit } from '@angular/core';
import { EmployService } from './services/EmployService';
@Component({
  selector: 'app-employees-table',
  templateUrl: './employees-table.component.html',
  styleUrls: ['./employees-table.component.css']
})
export class EmployeesTableComponent implements OnInit {
  allEmployees: any;
  filteredEmployees: any = [];

  constructor(
    private employService: EmployService
  ) {
  }

  ngOnInit(): void {
    this.employService.getAll().subscribe((data) => {

      this.allEmployees = data;
      this.mappingEmplyeesArray();

    })
  }

  mappingEmplyeesArray() {

    this.filteredEmployees = this.allEmployees.reduce((accumulator: any, current: any) => {
      const employeeName = current.EmployeeName ?? 'nepoznat';
      const startTime = new Date(current.StarTimeUtc);
      const endTime = new Date(current.EndTimeUtc);

      const timeDifference = endTime.getTime() - startTime.getTime();
      const hoursWorked = timeDifference / (1000 * 60 * 60);

      //Ja ovde dobijam datume koji su losi,u minusu budu, i to sam izbegao, a ne znam dal je trebalo.
      if (hoursWorked > 0) {
        if (!accumulator[employeeName]) {
          accumulator[employeeName] = 0;
        }
        accumulator[employeeName] += hoursWorked;
      }

      return accumulator;
    }, {});

    this.filteredEmployees = Object.entries(this.filteredEmployees)
      .map(([name, hours]: any) => ({
        fullName: name,
        totalHourse: Math.round(hours)
      }))
      .sort((a: any, b: any) => b.totalHourse - a.totalHourse);
  }
}
