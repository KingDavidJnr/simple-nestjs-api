import { Task } from './dtos/task.dto';
import { TaskService } from './task.service';
export declare class TaskController {
    private taskService;
    constructor(taskService: TaskService);
    addTask(task: Task): Promise<Task>;
    listTaskById(id: number): Promise<Task | "Id not found!">;
}
