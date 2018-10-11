import { Item } from './item.model';

export class MotorAdtRequest {
    number: number = 0;
    cupom: Item = new Item();
    company: Item = new Item();
    modality: Item = new Item();
    formPayment: Item = new Item();
}
