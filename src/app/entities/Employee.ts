import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';

import { v4 as uuid } from 'uuid';

import { CreateEmployeePropsDTO } from '../useCases/Employee/EmployeeDTO';

import { Daily } from './Daily';
import { Role } from './Role';
import { Shop } from './Shop';

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
  email: string;
  @Column()
  password: string;

  @Column()
  balance: string;

  @Column()
  profile_photo?: string;

  @ManyToOne(() => Shop, (shop) => shop.employees)
  shop: Shop;

  @ManyToOne(() => Role, (role) => role.employees)
  role: Role;

  @OneToMany(() => Daily, (daily) => daily.employee)
  dailies: Daily[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
