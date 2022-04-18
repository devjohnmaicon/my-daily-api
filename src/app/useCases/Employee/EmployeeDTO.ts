import { Shop } from "../../entities/Shop";

export interface CreateEmployeePropsDTO {
  name: string;
  password: string;
  role: string;
  balance: string;
  profile_photo: string;
  shop: Shop;
}
