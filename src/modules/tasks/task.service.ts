import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskEntity } from 'src/entities/tasks.entites';
import { Repository } from 'typeorm';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(TaskEntity)
    private taskRepository: Repository<TaskEntity>,
  ) {}
  async createTask(task: any) {
    const newTask = this.taskRepository.create(task);
    return await this.taskRepository.save(newTask);
  }

  async getById(id: number) {
    const getTask = this.taskRepository.findOne({ where: { id: id } });
    if (getTask) return getTask;
    if (!getTask)
      throw new HttpException(
        'task with this id does not exist',
        HttpStatus.UNAUTHORIZED,
      );
  }

  async doneTask(id: number) {
    const taskToMarkAsDone = await this.taskRepository.findOne({
      where: { id: id },
    });

    if (!taskToMarkAsDone) {
      throw new HttpException(
        'Task with this id does not exist',
        HttpStatus.NOT_FOUND,
      );
    }

    await this.taskRepository.update(id, { done: true });
    const doneTaskEntity = await this.taskRepository.findOne({
      where: { id: id },
    });
    return doneTaskEntity;
  }

  async updateTask(id: number, updatedTask: Partial<TaskEntity>) {
    const taskToUpdate = await this.taskRepository.findOne({
      where: { id: id },
    });

    if (!taskToUpdate) {
      throw new HttpException(
        'Task with this id does not exist',
        HttpStatus.NOT_FOUND,
      );
    }

    await this.taskRepository.update(id, updatedTask);
    const updatedTaskEntity = await this.taskRepository.findOne({
      where: { id: id },
    });

    return updatedTaskEntity;
  }

  async deleteTask(id: number) {
    const taskToDelete = await this.taskRepository.findOne({
      where: { id: id },
    });

    if (!taskToDelete) {
      throw new HttpException(
        'Task with this id does not exist',
        HttpStatus.NOT_FOUND,
      );
    }

    await this.taskRepository.remove(taskToDelete);
    return 'Task deleted successfully';
  }
}
