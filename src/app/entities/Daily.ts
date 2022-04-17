import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryColumn,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import { v4 as uuid } from 'uuid';
import { CreateDailyPropsDTO } from '../useCases/Daily/DailyDTO';
import { Employee } from './Employee';

@Entity('dailies')
export class Daily {
  constructor(props: CreateDailyPropsDTO) {
    Object.assign(this, props);

    if (!this.id) {
      this.id = uuid();
    }
  }

  @PrimaryColumn()
  id: string;

  @Column()
  type: string;

  @Column()
  value: number;

  @Column()
  date: string;

  @Column()
  description?: string;

  @ManyToOne(() => Employee, (employee) => employee.dailies)
  employee: Employee;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
