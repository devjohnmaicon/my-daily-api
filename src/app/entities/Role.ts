import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CreateRolePropsDTO } from '../useCases/Role/roleDTO';
import { Employee } from './Employee';
import { Shop } from './Shop';

@Entity('roles')
export class Role {
  constructor(props: CreateRolePropsDTO) {
    Object.assign(this, props);
  }

  @PrimaryGeneratedColumn('increment')
  id: string;

  @Column()
  name: string;

  @OneToMany(() => Employee, (employee) => employee.role)
  employees: Employee[];

  @Column()
  description?: string;

  @OneToMany(() => Shop, (shop) => shop.role)
  shops: Shop[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
