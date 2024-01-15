import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskEntity } from 'src/entities/task.entities';
import { BaseRepository } from 'src/interface/BaseRepository';
import { ITaskRepository } from 'src/interface/ITaskRepository';
import { Repository } from 'typeorm';

@Injectable()
export class TaskRepository
  extends BaseRepository<TaskEntity, Repository<TaskEntity>>
  implements ITaskRepository
{
  constructor(
    @InjectRepository(TaskEntity)
    protected readonly repository: Repository<TaskEntity>,
  ) {
    super(repository);
  }
}
