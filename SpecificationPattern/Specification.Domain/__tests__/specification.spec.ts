import { Staff } from "../Entities/Staff";
import { StaffValidator } from "../ValidationRules/StaffValidator"

describe("Staff specification Validation", () => {
    test("StaffValidator", () => {
        const validator = new StaffValidator();
        const result = validator.Validate(new Staff("",""));
        console.log(result);
    })
})