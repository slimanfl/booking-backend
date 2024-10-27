import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { Event } from '../interfaces/event.interface';
import { createEventDto } from '../dto/CreateEventDto.dto';
import { updateEventDto } from '../dto/UpdateEventDto.dto';

@Injectable()
export class EventService {
  constructor(
    @Inject('EVENT_MODEL')
    private eventModel: Model<Event>,
  ) {}
  async findAll(): Promise<Event[]> {
    return this.eventModel.find();
  }
  async getEventByID(id: string): Promise<Event> {
    const event = await this.eventModel.findById(id);
    if (!event) throw new NotFoundException();
    return event;
  }
  async createEvent(newEvent: createEventDto): Promise<Event> {
    const createEvent = await this.eventModel.create(newEvent);
    if (!createEvent) throw new NotFoundException();
    return createEvent;
  }
  async updateEvent(id: string, updateEvent: updateEventDto): Promise<Event> {
    const updatedEvent = await this.eventModel.findByIdAndUpdate(
      id,
      updateEvent,
      {
        new: true,
      },
    );
    if (!updatedEvent) throw new NotFoundException();
    return updatedEvent;
  }
  async deleteEvent(id: string) {
    const deletedEvent = await this.eventModel.findByIdAndDelete(id);
    if (!deletedEvent) throw new NotFoundException();
    return deletedEvent;
  }
}
