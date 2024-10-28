"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventsModule = void 0;
const common_1 = require("@nestjs/common");
const database_module_1 = require("../database/database.module");
const config_1 = require("@nestjs/config");
const events_provider_1 = require("./providers/events.provider");
const events_service_1 = require("./services/events.service");
const events_controller_1 = require("./controller/events.controller");
let EventsModule = class EventsModule {
};
exports.EventsModule = EventsModule;
exports.EventsModule = EventsModule = __decorate([
    (0, common_1.Module)({
        imports: [database_module_1.DatabaseModule, config_1.ConfigModule.forRoot()],
        controllers: [events_controller_1.EventController],
        providers: [...events_provider_1.eventsProviders, events_service_1.EventService],
    })
], EventsModule);
//# sourceMappingURL=events.module.js.map