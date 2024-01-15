import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('tasks')
export class TasksEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({default :Date.now()})
  name_task: string;

  @Column()
  create_at: Date;

  @Column({default :Date.now()})
  finish_at: Date;

  @Column({default : false})
  done?: boolean;
}
