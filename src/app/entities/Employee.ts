import {
    Entity,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    PrimaryColumn,
    ManyToOne,
  } from 'typeorm';
  import { v4 as uuid } from 'uuid';
  import { CreateEmployeePropsDTO } from '../useCases/Employee/EmployeeDTO';
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
    role: string;
  
    @Column()
    balance: string;
  
    @Column()
    profile_photo?: string;
  
    @ManyToOne(() => Shop, (shop) => shop.employees)
    shop: Shop;
  
    @CreateDateColumn()
    created_at: Date;
  
    @UpdateDateColumn()
    updated_at: Date;
  }
  