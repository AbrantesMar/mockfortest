import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MotorAdt } from '../models/motor-adt.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-mock-adt',
  templateUrl: './mock-adt.component.html',
  styleUrls: ['./mock-adt.component.css']
})
export class MockAdtComponent implements OnInit {

  motorAdt: MotorAdt; 

  constructor(
    private http: HttpClient
  ){ }
  ngOnInit() {
    this.http.get<MotorAdt>('/api/adt').subscribe(data => {
      this.motorAdt = data;
    });
  }
}
