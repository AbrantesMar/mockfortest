import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

import { environment } from '../../environments/environment';
// Models
import { MotorAdt } from '../models/motor-adt.model';

@Injectable()
export class MockService {

  constructor(
    private http: HttpClient
  ) { }

  getMotorAdts(): Observable<MotorAdt[]>  {
    return this.http.get<MotorAdt[]>(`${environment.api}/mock`);
  }

  postMotorAdts(motorAdt: MotorAdt)  {
    return this.http.post<any>(`${environment.api}/mock`, motorAdt);
  }

  deleteMotorAdts(idMotorAdt: number)  {
    return this.http.delete<any>(`${environment.api}/mock/${idMotorAdt}`);
  }
}
