import { MotorAdtResponse } from "./motor-adt-response.model";
import { MotorAdtRequest } from "./motor-adt-request.model";

export class MotorAdt {
    _id?: string;
    request: MotorAdtRequest = new MotorAdtRequest()
    response: MotorAdtResponse = new MotorAdtResponse()
}
