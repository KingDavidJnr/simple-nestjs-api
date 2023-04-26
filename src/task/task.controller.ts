import {
	Body,
	Controller,
	Get,
	Post,
	Param,
	ParseIntPipe,
	Request,
} from '@nestjs/common';
import { Task } from './dtos/task.dto';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController {
	constructor(private taskService: TaskService) { }

	// It will handle all HTTP POST Requests made
	// to '/task' endpoint from client.
	@Post()
	async addTask(@Body() task: Task) {
		const addedTask = this.taskService.addTask(task);
		return addedTask;
	}

	// It will handle all HTTP GET Requests made
	// to '/task' endpoint from client.
	@Get(':id')
	async listTaskById(@Param('id', ParseIntPipe) id: number) {
		if (id) {
			return this.taskService.listTaskById(id);
		}
		return 'Id not found!';
	}
}
