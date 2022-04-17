import { RoleRepository } from '../../repositories/implementations/RoleRepository';
import { CreateRoleUseCase } from './CreateRoleUseCase';
import { RoleController } from './RoleController';

const roleRepository = new RoleRepository();
const createRoleUseCase = new CreateRoleUseCase(roleRepository);

const roleController = new RoleController(createRoleUseCase);

export { createRoleUseCase, roleController };
