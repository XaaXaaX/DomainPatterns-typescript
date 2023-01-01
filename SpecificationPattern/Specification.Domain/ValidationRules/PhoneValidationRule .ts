import { Staff } from "../Entities/Staff";
import { NotificationEventArgs, NotificationPublisher } from "../Notifications/Notifications";
import { Specification } from "../Specifications/Specification";

class PhoneValidationRule extends Specification<Staff>
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