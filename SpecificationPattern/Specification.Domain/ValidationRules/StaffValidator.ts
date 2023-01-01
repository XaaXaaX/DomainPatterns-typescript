import { Staff } from "../Entities/Staff";
import { StaffValidationRule } from "./StaffValidationRule";
import { Validator } from "./Validator";

class StaffValidator extends Validator<Staff> {
  public constructor() {
    super(new StaffValidationRule());
  }
}

export { StaffValidator };
