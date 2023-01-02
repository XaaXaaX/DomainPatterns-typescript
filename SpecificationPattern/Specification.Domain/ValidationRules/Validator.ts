import { Notifier, ValidationNotification } from "../Notifications/Notifications";
import { ISpecification } from "../Specifications/ISpecification";

class Validator<T> extends Notifier
{
    public constructor(public readonly validationRule: ISpecification<T> )
    {
        super();
    }
    public Validate(model: T): ValidationNotification 
    {
        this.validationRule.IsSatisfiedBy(model);
        return this.Notifications;
    }
}


export { Validator };