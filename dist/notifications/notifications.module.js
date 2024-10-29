"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationsModule = void 0;
const common_1 = require("@nestjs/common");
const database_module_1 = require("../database/database.module");
const config_1 = require("@nestjs/config");
const notification_provider_1 = require("./providers/notification.provider");
const notifications_controller_1 = require("./controller/notifications.controller");
const notifications_service_1 = require("./services/notifications.service");
const notifications_gateway_1 = require("./gateway/notifications.gateway");
let NotificationsModule = class NotificationsModule {
};
exports.NotificationsModule = NotificationsModule;
exports.NotificationsModule = NotificationsModule = __decorate([
    (0, common_1.Module)({
        imports: [database_module_1.DatabaseModule, config_1.ConfigModule.forRoot()],
        controllers: [notifications_controller_1.NotificationsController],
        providers: [...notification_provider_1.notificationProviders, notifications_service_1.NotificationsService, notifications_gateway_1.NotificationsGateway],
    })
], NotificationsModule);
//# sourceMappingURL=notifications.module.js.map