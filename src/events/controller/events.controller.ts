import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';

import { UsersGuard } from 'src/users/guards/users.guard';
import { EventService } from '../services/events.service';
import { Roles } from 'src/users/guards/roles.decorator';
import { createEventDto } from '../dto/CreateEventDto.dto';
import { updateEventDto } from '../dto/UpdateEventDto.dto';

@Controller('events')
@UseGuards(UsersGuard)
export class EventController {
  constructor(private readonly eventService: EventService) {}
  @Roles(['admin', 'manager'])
  @Get()
  getAllEvents() {
    return this.eventService.findAll();
  }
  @Roles(['admin', 'manager'])
  @Get(':id')
  getEventByID(@Param('id') id: string) {
    return this.eventService.getEventByID(id);
  }
  @Roles(['admin'])
  @Post()
  createEvent(
    @Body(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
    newEvent: createEventDto,
  ) {
    return this.eventService.createEvent(newEvent);
  }
  @Roles(['admin', 'manager'])
  @Patch(':id')
  updateEvent(
    @Param('id') id: string,
    @Body(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
    body: updateEventDto,
  ) {
    return this.eventService.updateEvent(id, body);
  }
  @Roles(['admin'])
  @Delete(':id')
  deleteEvent(@Param('id') id: string) {
    return this.eventService.deleteEvent(id);
  }
}
