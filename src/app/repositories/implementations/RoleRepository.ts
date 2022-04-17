import { getRepository } from 'typeorm';
import { Role } from '../../entities/Role';
import { IRoleRepository } from '../IRoleRepository';

export class RoleRepository implements IRoleRepository {
  async save(role: Role): Promise<Role> {
    const repo = getRepository(Role);

    const newRole = await repo.save(role);

    return newRole;
  }
}
