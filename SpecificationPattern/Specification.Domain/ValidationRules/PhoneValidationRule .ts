import { Staff } from "../Entities/Staff";
import { NotificationEventArgs, NotificationPublisher } from "../Notifications/Notifications";
import { ISpecification } from "../Specifications/ISpecification";
import { Specification } from "../Specifications/Specification";

class PhoneValidationRule extends Specification<Staff> implements ISpecification<Staff>
{
    public IsSatisfiedBy(staff: Staff): boolean
    {
        let isSatisfied = !!staff.GetPhone();

            if (!isSatisfied) 
            NotificationPublisher.OnRaiseNotificationEvent(new NotificationEventArgs("This is Invalid Phone message"));
        
        return isSatisfied;
    }
}

export { PhoneValidationRule };