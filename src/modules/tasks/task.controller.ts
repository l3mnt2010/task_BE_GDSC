import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  NotFoundException,
} from '@nestjs/common';
import { TaskService } from './task.service';

@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get(':id')
  async getTaskById(@Param('id') id: number) {
    const task = await this.taskService.getById(id);
    if (!task) {
      throw new NotFoundException('Task not found');
    }
    return task;
  }

  @Post('create')
  async createTask(@Body() taskDto: any) {
    return await this.taskService.createTask(taskDto);
  }

  @Put(':id')
  async updateTask(@Param('id') id: number, @Body() updatedTask: Partial<any>) {
    return await this.taskService.updateTask(id, updatedTask);
  }

  @Put(':id/done')
  async markTaskAsDone(@Param('id') id: number) {
    return await this.taskService.doneTask(id);
  }

  @Delete(':id')
  async deleteTask(@Param('id') id: number) {
    return await this.taskService.deleteTask(id);
  }
}
