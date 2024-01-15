import { Tasks } from 'src/models/tasks.model';
import { AbstractPromise } from './AbstractRepository';

export interface ICategoryRepository extends AbstractPromise<Tasks> {}
