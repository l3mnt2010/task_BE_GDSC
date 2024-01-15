import { MinLength, IsNotEmpty, IsNumber } from 'class-validator';

export class taskDto {
  @IsNotEmpty()
  category_Id?: number;
  @MinLength(1, { message: 'this field must be longer than 1 character' })
  name_task?: string;
  create_at?: Date;
  finish_at?: Date;
  done?: boolean;

}
