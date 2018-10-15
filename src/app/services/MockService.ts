import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

// Models
import { MotorAdt } from '../models/motor-adt.model';

@Injectable()
export class MockService {

  constructor(
    private http: HttpClient
  ) { }

  getMotorAdts(): Observable<MotorAdt[]>  {
    return this.http.get<MotorAdt[]>('api');
  }

  postMotorAdts(motorAdt: MotorAdt)  {
    return this.http.post<any>('api', motorAdt);
  }

  deleteMotorAdts(idMotorAdt: number)  {
    return this.http.delete<any>(`api/${idMotorAdt}`);
  }
}
