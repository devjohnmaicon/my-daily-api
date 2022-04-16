import {
    Entity,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    PrimaryColumn,
    OneToMany,
  } from 'typeorm';
  
  import { v4 as uuid } from 'uuid';
  
  import { CreateShopPropsDTO } from '../useCases/Shop/ShopDTO';
  import { Employee } from './Employee';
  
  @Entity('shops')
  export class Shop {
    constructor(props: CreateShopPropsDTO) {
      Object.assign(this, props);
  
      if (!this.id) {
        this.id = uuid();
      }
    }
  
    @PrimaryColumn()
    id: string;
  
    @Column()
    name: string;
  
    @Column('character varying', { length: 20 })
    phone: string;
  
    @Column()
    city: string;
  
    @Column()
    profile_photo: string;
  
    @OneToMany(() => Employee, employee => employee.shop)
    employees: Employee[];
  
    @CreateDateColumn()
    created_at: Date;
  
    @UpdateDateColumn()
    updated_at: Date;
  }
  