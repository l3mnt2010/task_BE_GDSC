import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskModule } from './modules/tasks/task.module';
import { TaskEntity } from './entities/tasks.entites';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      // :)) do something to eat no do no eat :))
    }),
    TaskModule,
  ],
  providers: [AppService],
})
export class AppModule {}
