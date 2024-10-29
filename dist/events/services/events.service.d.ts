import { Model } from 'mongoose';
import { Event } from '../interfaces/event.interface';
import { createEventDto } from '../dto/CreateEventDto.dto';
import { updateEventDto } from '../dto/UpdateEventDto.dto';
export declare class EventService {
    private eventModel;
    constructor(eventModel: Model<Event>);
    findAll(): Promise<Event[]>;
    getEventByID(id: string): Promise<Event>;
    createEvent(newEvent: createEventDto): Promise<Event>;
    updateEvent(id: string, updateEvent: updateEventDto): Promise<Event>;
    deleteEvent(id: string): Promise<import("mongoose").Document<unknown, {}, Event> & Event & Required<{
        _id: unknown;
    }> & {
        __v?: number;
    }>;
}
