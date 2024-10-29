import { OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { Server } from 'socket.io';
import { createNotificationDto } from '../dto/notification.dto';
import { NotificationsService } from '../services/notifications.service';
export declare class NotificationsGateway implements OnGatewayConnection, OnGatewayDisconnect {
    private notificationsService;
    server: Server;
    constructor(notificationsService: NotificationsService);
    handleConnection(client: any): void;
    handleDisconnect(client: any): void;
    handleCreateNotification(client: any, notificationData: createNotificationDto): Promise<void>;
}
