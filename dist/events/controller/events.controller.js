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
exports.EventController = void 0;
const common_1 = require("@nestjs/common");
const users_guard_1 = require("../../users/guards/users.guard");
const events_service_1 = require("../services/events.service");
const roles_decorator_1 = require("../../users/guards/roles.decorator");
const CreateEventDto_dto_1 = require("../dto/CreateEventDto.dto");
const UpdateEventDto_dto_1 = require("../dto/UpdateEventDto.dto");
let EventController = class EventController {
    constructor(eventService) {
        this.eventService = eventService;
    }
    getAllEvents() {
        return this.eventService.findAll();
    }
    getEventByID(id) {
        return this.eventService.getEventByID(id);
    }
    createEvent(newEvent) {
        return this.eventService.createEvent(newEvent);
    }
    updateEvent(id, body) {
        return this.eventService.updateEvent(id, body);
    }
    deleteEvent(id) {
        return this.eventService.deleteEvent(id);
    }
};
exports.EventController = EventController;
__decorate([
    (0, roles_decorator_1.Roles)(['admin', 'manager']),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EventController.prototype, "getAllEvents", null);
__decorate([
    (0, roles_decorator_1.Roles)(['admin', 'manager']),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EventController.prototype, "getEventByID", null);
__decorate([
    (0, roles_decorator_1.Roles)(['admin']),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateEventDto_dto_1.createEventDto]),
    __metadata("design:returntype", void 0)
], EventController.prototype, "createEvent", null);
__decorate([
    (0, roles_decorator_1.Roles)(['admin', 'manager']),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)(new common_1.ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, UpdateEventDto_dto_1.updateEventDto]),
    __metadata("design:returntype", void 0)
], EventController.prototype, "updateEvent", null);
__decorate([
    (0, roles_decorator_1.Roles)(['admin']),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EventController.prototype, "deleteEvent", null);
exports.EventController = EventController = __decorate([
    (0, common_1.Controller)('events'),
    (0, common_1.UseGuards)(users_guard_1.UsersGuard),
    __metadata("design:paramtypes", [events_service_1.EventService])
], EventController);
//# sourceMappingURL=events.controller.js.map