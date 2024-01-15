import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('tasks')
export class TaskEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name_task: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  create_at: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  finish_at: Date;

  @Column({ default: false })
  done: boolean;
}
