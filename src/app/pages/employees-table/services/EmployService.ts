import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { IEmploy } from '../interfaces/i-employ';
import { apis } from 'src/app/constats/apis';


@Injectable({
  providedIn: 'root'
})
export class EmployService extends ApiService<IEmploy>{

  constructor(
    http:HttpClient
  ) {
    super(http, apis.employees);
   }
}