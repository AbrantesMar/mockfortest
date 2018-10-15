import { Item } from './item.model';
import { Packet } from './packet.model';

export class MotorAdtResponse {
    packets: Packet[] = new Array<Packet>(new Packet());
    financingTable: Item = new Item();
}
