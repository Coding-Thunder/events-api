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
const mongoose_1 = require("@nestjs/mongoose");
const events_schema_1 = require("./events.schema");
const mongoose_2 = require("mongoose");
let EventService = class EventService {
    constructor(eventModel) {
        this.eventModel = eventModel;
    }
    async createUser(body) {
        try {
            let created = await this.eventModel.create(body);
            if (created) {
                return { message: "Record Created Successfully" };
            }
        }
        catch (error) {
            throw new Error(error);
        }
    }
    async getUser(query) {
        try {
            let page = Number(query.page) || 1;
            let limit = Number(query.perPage) || 3;
            let skip = (page - 1) * limit;
            let data = await this.eventModel.find().skip(skip).limit(limit);
            if (data) {
                return { message: "Success", data };
            }
        }
        catch (error) {
            throw new Error(error);
        }
    }
};
exports.EventService = EventService;
exports.EventService = EventService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(events_schema_1.Events.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], EventService);
//# sourceMappingURL=events.service.js.map