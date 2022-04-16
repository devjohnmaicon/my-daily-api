import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';
import { CreateDailyPropsDTO } from '../useCases/Daily/DailyDTO';

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

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
