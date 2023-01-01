import { Notifier, ValidationNotification } from "../Notifications/Notifications";
import { ISpecification } from "../Specifications/ISpecification";

class Validator<T> extends Notifier
{
    public readonly validationRule: ISpecification<T> ;
    
    public constructor(validationRule: ISpecification<T> )
    {
        super()
        this.validationRule = validationRule;
    }
    public Validate(model: T): ValidationNotification 
    {
        this.validationRule.IsSatisfiedBy(model);
        return this.Notifications;
    }
}


export { Validator };