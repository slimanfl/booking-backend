import { Body, Controller, Get, Post, Param, Patch } from '@nestjs/common';
import { NotificationsService } from '../services/notifications.service';

@Controller('notifications')
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) {}

  @Post()
  async create(@Body() notification: Partial<Notification>) {
    return this.notificationsService.create(notification);
  }

  @Get()
  async findAll() {
    return this.notificationsService.findAll();
  }

  @Patch(':id/read')
  async markAsRead(@Param('id') id: string) {
    return this.notificationsService.markAsRead(id);
  }
}
