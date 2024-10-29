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
Object.defineProperty(exports, "__esModule", { value: true });
exports.createEventDto = void 0;
const class_validator_1 = require("class-validator");
class createEventDto {
}
exports.createEventDto = createEventDto;
__decorate([
    (0, class_validator_1.IsNumber)({}, { message: 'count must be number' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'count must be require' }),
    __metadata("design:type", Number)
], createEventDto.prototype, "count", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'meals must be string' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'meals must be require' }),
    __metadata("design:type", String)
], createEventDto.prototype, "meals", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'section must be string' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'section must be require ' }),
    __metadata("design:type", String)
], createEventDto.prototype, "section", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'date must be require' }),
    __metadata("design:type", Date)
], createEventDto.prototype, "date", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'id must be string' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'id user must be require' }),
    __metadata("design:type", String)
], createEventDto.prototype, "userId", void 0);
//# sourceMappingURL=CreateEventDto.dto.js.map