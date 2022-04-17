import { Role } from '../../entities/Role';
import { IRoleRepository } from '../../repositories/IRoleRepository';
import { CreateRolePropsDTO } from './roleDTO';

export class CreateRoleUseCase {
  constructor(private roleRepository: IRoleRepository) {}

  public async execute({
    name,
    description,
  }: CreateRolePropsDTO): Promise<Role | Error> {
    const role = new Role({
      name,
      description,
    });

    const newRole = await this.roleRepository.save(role);

    return newRole;
  }
}
