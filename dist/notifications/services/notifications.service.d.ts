import { JwtService } from '@nestjs/jwt';
import { Model } from 'mongoose';
export declare class NotificationsService {
    private notificationModel;
    private jwtService;
    constructor(notificationModel: Model<Notification>, jwtService: JwtService);
    create(notification: Partial<Notification>): Promise<Notification>;
    findAll(): Promise<Notification[]>;
    markAsRead(id: string): Promise<Notification>;
}
