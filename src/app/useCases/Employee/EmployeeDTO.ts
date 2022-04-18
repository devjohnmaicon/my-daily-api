import { Shop } from '../../entities/Shop';

export interface CreateEmployeePropsDTO {
  name: string;
  email: string;
  password: string;
  role: string;
  balance: string;
  profile_photo: string;
  shop: Shop;
}

export interface GetByEmailPropsDTO {
  email: string;
  password: string;
}
