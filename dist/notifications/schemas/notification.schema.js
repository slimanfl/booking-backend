"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationSchema = void 0;
const mongoose = require("mongoose");
exports.NotificationSchema = new mongoose.Schema({
    title: String,
    message: String,
    read: Boolean,
    createdAt: Date,
});
//# sourceMappingURL=notification.schema.js.map