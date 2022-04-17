import { Role } from '../entities/Role';

export interface IRoleRepository {
  save(role: Role): Promise<Role>;
}
