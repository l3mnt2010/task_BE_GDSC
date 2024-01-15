export class Tasks {
  id?: number;
  name_task: string;
  create_at : Date;
  finish_at : Date;
  constructor({ id,name_task, create_at,finish_at }) {
    if (id !== undefined) this.id = id;
    if (name_task !== undefined) this.name_task = name_task;

    if (create_at !== undefined) this.create_at = create_at;
    if (name_task !== undefined) this.name_task = name_task;
  }
}
