import { Module } from '@nestjs/common';
import { TasksEntity } from 'src/entities/tasks.entities';
import { TaskController } from './tasks.controller';
import { TaskService } from './tasks.service';
import { TaskRepository } from './tasks.repository';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([TasksEntity])],
  controllers: [TaskController],
  providers: [
    TaskService,
    {
      useClass: TaskRepository,
      provide: 'ITaskRepository',
    },
  ],
})
export class TaskModule {}
