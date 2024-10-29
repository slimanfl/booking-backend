import { EventService } from '../services/events.service';
import { createEventDto } from '../dto/CreateEventDto.dto';
import { updateEventDto } from '../dto/UpdateEventDto.dto';
export declare class EventController {
    private readonly eventService;
    constructor(eventService: EventService);
    getAllEvents(): Promise<import("../interfaces/event.interface").Event[]>;
    getEventByID(id: string): Promise<import("../interfaces/event.interface").Event>;
    createEvent(newEvent: createEventDto): Promise<import("../interfaces/event.interface").Event>;
    updateEvent(id: string, body: updateEventDto): Promise<import("../interfaces/event.interface").Event>;
    deleteEvent(id: string): Promise<import("mongoose").Document<unknown, {}, import("../interfaces/event.interface").Event> & import("../interfaces/event.interface").Event & Required<{
        _id: unknown;
    }> & {
        __v?: number;
    }>;
}
