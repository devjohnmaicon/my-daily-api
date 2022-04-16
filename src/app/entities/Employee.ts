import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryColumn,
} from 'typeorm';
import { v4 as uuid  } from 'uuid';
import { CreateEmployeePropsDTO } from '../useCases/Employee/EmployeeDTO';

@Entity('employees')
export class Employee {
  constructor(props: CreateEmployeePropsDTO) {
    Object.assign(this, props);

    if (!this.id) {
      this.id = uuid();
    }
  }

  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  role: string;

  @Column()
  balance: string;

  @Column()
  profile_photo?: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
