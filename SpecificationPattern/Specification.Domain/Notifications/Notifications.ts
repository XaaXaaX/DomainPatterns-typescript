class NotificationPublisher
{
    public static RaiseNotificationEvent: (sender: object, e: NotificationEventArgs) => void;
    public static OnRaiseNotificationEvent(e: NotificationEventArgs ): void 
    {
        if (this.RaiseNotificationEvent == null)
            return;

        this.RaiseNotificationEvent({}, e);
    }
}

class NotificationEventArgs
{
    public constructor(public readonly Message: string) {}
}

class ValidationNotification
{
    public Errors: string[] = [];
    
    public get IsValid() : boolean {
        return this.Errors.length == 0;
    }
}

abstract class Notifier
{
    public readonly Notifications = new ValidationNotification();

    protected constructor()
    {
        NotificationPublisher.RaiseNotificationEvent = this.HandleNotificationEvent;
    }

    public HandleNotificationEvent(sender: object, e: NotificationEventArgs): void 
    {
        if (this.Notifications.Errors.indexOf(e.Message) == -1) 
        {
            this.Notifications.Errors.push(e.Message);
        }
    }
}

export { 
    NotificationEventArgs,
    NotificationPublisher,
    ValidationNotification,
    Notifier
}