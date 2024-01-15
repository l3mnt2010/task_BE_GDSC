import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { TasksEntity } from './entities/tasks.entities';
import {  TaskModule } from './modules/categories/tasks.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      // .env
    }),
    TaskModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
