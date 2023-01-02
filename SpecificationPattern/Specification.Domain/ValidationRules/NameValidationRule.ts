import { Staff } from "../Entities/Staff";
import { NotificationEventArgs, NotificationPublisher } from "../Notifications/Notifications";
import { ISpecification } from "../Specifications/ISpecification";
import { Specification } from "../Specifications/Specification";

class NameValidationRule extends Specification<Staff> implements ISpecification<Staff> {
  public IsSatisfiedBy(staff: Staff): boolean {
    const isSatisfied = !!staff.GetName();

    if (!isSatisfied)
      NotificationPublisher.OnRaiseNotificationEvent(new NotificationEventArgs("This is invalid Name message"));

    return isSatisfied;
  }
}

export { NameValidationRule };
