import { Task } from './dtos/task.dto';
import { TaskService } from './task.service';
export declare class TaskController {
    private taskService;
    constructor(taskService: TaskService);
    addTask(task: Task): Promise<import("../../../src/task/dtos/task.dto").Task>;
    listTaskById(id: number): Promise<import("../../../src/task/dtos/task.dto").Task | "Id not found!">;
}
