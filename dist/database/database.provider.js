"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProviders = void 0;
const mongoose = require("mongoose");
exports.databaseProviders = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: () => mongoose.connect('mongodb+srv://tabaa200:sliman-123456@cluster.aeeib.mongodb.net/?retryWrites=true&w=majority&appName=Cluster'),
    },
];
//# sourceMappingURL=database.provider.js.map