import { Staff } from "../Entities/Staff";
import { Specification } from "../Specifications/Specification";
import { NameValidationRule } from "./NameValidationRule";
import { PhoneValidationRule } from "./PhoneValidationRule ";

class StaffValidationRule extends Specification<Staff> {
  public readonly NameValidationRule: NameValidationRule = new NameValidationRule();
  public readonly PhoneValidationRule: PhoneValidationRule = new PhoneValidationRule();

  public IsSatisfiedBy(model: Staff): boolean {
    return this.NameValidationRule.
        XAnd(this.PhoneValidationRule)
        .IsSatisfiedBy(model);
  }
}

export { StaffValidationRule };