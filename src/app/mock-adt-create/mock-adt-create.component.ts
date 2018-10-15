import { Component, OnInit } from '@angular/core';
import { MockAdtComponent } from '../mock-adt/mock-adt.component';
import { MotorAdt } from '../models/motor-adt.model';
import { Packet } from '../models/packet.model';
import { MockService } from '../services/MockService';

@Component({
  selector: 'app-mock-adt-create',
  templateUrl: './mock-adt-create.component.html',
  styleUrls: ['./mock-adt-create.component.css']
})
export class MockAdtCreateComponent implements OnInit {

  adt: MotorAdt = new MotorAdt();
  constructor(
    private mockService: MockService
  ) { }

  ngOnInit() {
  }

  addPacket() {
    if (this.adt.response.packets.length < 3) {
      this.adt.response.packets.push(new Packet());
    }
  }

  deletePacket(index: number) {
    if (this.adt.response.packets.length > 1) {
      this.adt.response.packets = this.adt.response.packets.filter((packet, i) => i !== index);
    }
  }

  submit() {
    this.mockService.postMotorAdts(this.adt);
  }

}
