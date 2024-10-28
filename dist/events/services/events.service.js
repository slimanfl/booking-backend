"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
let EventService = class EventService {
    constructor(eventModel) {
        this.eventModel = eventModel;
    }
    async findAll() {
        return this.eventModel.find();
    }
    async getEventByID(id) {
        const event = await this.eventModel.findById(id);
        if (!event)
            throw new common_1.NotFoundException();
        return event;
    }
    async createEvent(newEvent) {
        const createEvent = await this.eventModel.create(newEvent);
        if (!createEvent)
            throw new common_1.NotFoundException();
        return createEvent;
    }
    async updateEvent(id, updateEvent) {
        const updatedEvent = await this.eventModel.findByIdAndUpdate(id, updateEvent, {
            new: true,
        });
        if (!updatedEvent)
            throw new common_1.NotFoundException();
        return updatedEvent;
    }
    async deleteEvent(id) {
        const deletedEvent = await this.eventModel.findByIdAndDelete(id);
        if (!deletedEvent)
            throw new common_1.NotFoundException();
        return deletedEvent;
    }
};
exports.EventService = EventService;
exports.EventService = EventService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('EVENT_MODEL')),
    __metadata("design:paramtypes", [mongoose_1.Model])
], EventService);
//# sourceMappingURL=events.service.js.map