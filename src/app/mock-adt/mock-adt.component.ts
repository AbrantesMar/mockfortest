import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MotorAdt } from '../models/motor-adt.model';
import { Observable } from 'rxjs';
import { MockService } from '../services/MockService';

@Component({
  selector: 'app-mock-adt',
  templateUrl: './mock-adt.component.html',
  styleUrls: ['./mock-adt.component.css']
})
export class MockAdtComponent implements OnInit {

  motorAdts: MotorAdt[];


  constructor(
    private mockService: MockService
  ) { }

  ngOnInit() {
    this.mockService.getMotorAdts()
    .subscribe((response: MotorAdt[]) => {
      this.motorAdts = response;
    });
  }
}
