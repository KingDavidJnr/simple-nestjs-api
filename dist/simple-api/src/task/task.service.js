"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskService = void 0;
const common_1 = require("@nestjs/common");
let TaskService = class TaskService {
    constructor() {
        this.tasks = [];
    }
    addTask(task) {
        const taskToAdd = {
            title: task.title,
            id: this.tasks.length + 1,
            description: task.description,
            createdOn: new Date(),
        };
        this.tasks.push(taskToAdd);
        return taskToAdd;
    }
    listTaskById(id) {
        const result = this.tasks.find((item) => item.id === id);
        if (result) {
            return result;
        }
        else {
            throw new common_1.HttpException('Task not found', common_1.HttpStatus.FORBIDDEN);
        }
    }
};
TaskService = __decorate([
    (0, common_1.Injectable)()
], TaskService);
exports.TaskService = TaskService;
//# sourceMappingURL=task.service.js.map