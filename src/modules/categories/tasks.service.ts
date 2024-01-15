import { Inject, Injectable } from '@nestjs/common';
import { taskDto } from 'src/dto/task.dto';
import { Tasks } from 'src/models/tasks.model';

@Injectable()
export class TaskService {
  constructor(
    @Inject('TaskRepository')
    private readonly taskRepository: Tasks,
  ) {}
  create(createTaskDto: taskDto) {
    const task = new this.taskRepository(createTaskDto);
    return task.save();
  }

  findAll() {
    return this.taskRepository.find();
  }

  findOne(id: string) {
    return this.taskRepository.findById(id);
  }

  update( updateUserDto: any) {
    return this.taskRepository.findByIdAndUpdate(
      { $set: updateTaskDto },
      { new: true }
    );
  }

  remove(id: string) {
    return this.taskRepository.deleteOne({ _id: id }).exec();
  }
}
