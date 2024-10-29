import { NotificationsService } from '../services/notifications.service';
export declare class NotificationsController {
    private readonly notificationsService;
    constructor(notificationsService: NotificationsService);
    create(notification: Partial<Notification>): Promise<Notification>;
    findAll(): Promise<Notification[]>;
    markAsRead(id: string): Promise<Notification>;
}
