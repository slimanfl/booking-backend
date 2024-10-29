"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eventsProviders = void 0;
const events_schema_1 = require("../schemas/events.schema");
exports.eventsProviders = [
    {
        provide: 'EVENT_MODEL',
        useFactory: (connection) => connection.model('event', events_schema_1.EventSchema),
        inject: ['DATABASE_CONNECTION'],
    },
];
//# sourceMappingURL=events.provider.js.map