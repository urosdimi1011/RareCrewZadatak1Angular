import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesTableComponent } from './pages/employees-table/employees-table.component';
import { HeaderComponent } from './fixed/header/header/header.component';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BcolorPipe } from './pages/employees-table/pipes/bcolor.pipe';
import { NgChartsModule } from 'ng2-charts';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { AppPieChartComponent } from './pages/employees-table/components/pie-chart/pie-chart.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeesTableComponent,
    HeaderComponent,
    BcolorPipe,
    SpinnerComponent,
    AppPieChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    HttpClientModule,
    NgChartsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
