import { Task } from 'src/task/dtos/task.dto';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

@Injectable()
export class TaskService {

	// We will be storing our task in this array,
	// to maintain simplicity of this article

	private tasks: Task[] = [];

	// We will be using these methods in
	// our Task controller.

	addTask(task: Task): Task {
		const taskToAdd: Task = {
			title: task.title,
			id: this.tasks.length + 1,
			description: task.description,
			createdOn: new Date(),
		};
		this.tasks.push(taskToAdd);
		return taskToAdd;
	}

	listTaskById(id: number): Task {
		const result = this.tasks.find((item) => item.id === id);
		if (result) {
			return result;
		} else {
			throw new HttpException(
				'Task not found', HttpStatus.FORBIDDEN);
		}
	}
}
