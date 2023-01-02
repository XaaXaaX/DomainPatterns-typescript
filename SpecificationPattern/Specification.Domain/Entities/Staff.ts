import { StaffValidator } from "../ValidationRules/StaffValidator";
import { Name } from "./Name";

class Staff
{
    private name: Name;
    private readonly validator = new StaffValidator();
    public constructor(name: string, private readonly phone: string)
    {
        this.name = new Name(name);
        this.phone = phone;

        this.check();
    }

    private check(): void 
    {
        if(!this.Validate()) throw new Error("This must be a custome exception containing validation results");
    }

    private Validate(): boolean {
        return this.validator.Validate(this).IsValid;
    }
    
    public  GetName(): string {
        return this.name.Value;
    }
    public GetPhone(): string {
        return  this.phone;
    }
}

export { Staff }