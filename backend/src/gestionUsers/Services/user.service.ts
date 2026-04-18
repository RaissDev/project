import { AppDataSource } from "../config/config";
import { users } from "../gestionUsers/entity/users";

const usersRepository = AppDataSource.getRepository(users);

export class usersService {
  async create(users: any) {
    const newGrourpe = usersRepository.create(users);
    return await usersRepository.save(newGrourpe);
  }

  async findAll() {
    return usersRepository.find();
  }

  async findOne(id: number) {
    return usersRepository.findOneBy({ id });
  }

  async Delete(id: number) {
    return usersRepository.softDelete({ id });
  }

  async update(id: number, data: any) {
    usersRepository.update(id, data);
    return this.findOne(id);
  }
}
