import { Module } from '@nestjs/common';

import { DatabaseModule } from 'src/database/database.module';
import { ConfigModule } from '@nestjs/config';
import { notificationProviders } from './providers/notification.provider';
import { NotificationsController } from './controller/notifications.controller';
import { NotificationsService } from './services/notifications.service';
import { NotificationsGateway } from './gateway/notifications.gateway';

@Module({
  imports: [DatabaseModule, ConfigModule.forRoot()],
  controllers: [NotificationsController],
  providers: [...notificationProviders, NotificationsService, NotificationsGateway],
})
export class NotificationsModule {}
