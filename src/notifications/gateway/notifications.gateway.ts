import {
  WebSocketGateway,
  SubscribeMessage,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { createNotificationDto } from '../dto/notification.dto';
import { NotificationsService } from '../services/notifications.service';
@WebSocketGateway({ cors: true })
export class NotificationsGateway
  implements OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer() server: Server;

  constructor(private notificationsService: NotificationsService) {}

  handleConnection(client: any) {
    console.log(`Client connected: ${client.id}`);
  }

  handleDisconnect(client: any) {
    console.log(`Client disconnected: ${client.id}`);
  }

  @SubscribeMessage('createNotification')
  async handleCreateNotification(
    client: any,
    notificationData: createNotificationDto,
  ) {
    console.log(notificationData);
    const notification =
      await this.notificationsService.create(notificationData);
    this.server.emit('notificationCreated', notification);
  }
}
