"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notificationProviders = void 0;
const notification_schema_1 = require("../schemas/notification.schema");
exports.notificationProviders = [
    {
        provide: 'NOTIFICATION_MODEL',
        useFactory: (connection) => connection.model('notification', notification_schema_1.NotificationSchema),
        inject: ['DATABASE_CONNECTION'],
    },
];
//# sourceMappingURL=notification.provider.js.map