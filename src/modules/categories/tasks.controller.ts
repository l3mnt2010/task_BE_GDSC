import {
  Controller,
  Get,
  Res,
  Param,
  Post,
  Body,
  Put,
  ValidationPipe,
  Patch,
  Delete,
} from '@nestjs/common';
import { TaskService } from './tasks.service';
import { Response } from 'src/global/globalClass';
import { Tasks } from 'src/models/tasks.model';
import { HttpMessage, HttpStatus } from '../../global/gobalEnum';
import { ResponseType } from '../../global/globalType';
import { taskDto } from 'src/dto/task.dto';
@Controller('tasks')
export class TaskController {
  constructor(private taskService: TaskService) {}

  @Post('/add')
  create(@Body() createTaskDto: taskDto) {
    return this.taskService.create(createTaskDto);
  }

  @Get()
  findAll() {
    return this.taskService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.taskService.findOne(id);
  }

  @Put("/update")
  update(@Param("id") id: string, @Body() updateTaskDto: any) {
    return this.taskService.update(updateTaskDto);
  }
  @Put("/done/")
  updateStatus(@Param("id") id: string, @Body() updateTaskDto: any) {
    return this.taskService.update(updateTaskDto);
  }

  @Delete("/delete/:id")
  remove(@Param("id") id: string) {
    return this.taskService.remove(id);
  }
}
