"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventSchema = void 0;
const mongoose = require("mongoose");
exports.EventSchema = new mongoose.Schema({
    count: Number,
    meals: String,
    section: String,
    date: Date,
    userId: String,
});
//# sourceMappingURL=events.schema.js.map