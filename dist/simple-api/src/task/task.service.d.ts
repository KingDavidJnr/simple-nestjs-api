import { Task } from 'src/task/dtos/task.dto';
export declare class TaskService {
    private tasks;
    addTask(task: Task): Task;
    listTaskById(id: number): Task;
}
