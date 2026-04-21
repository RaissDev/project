import { StrictUpdateFilter } from "typeorm";
import { AppDataSource } from "../../config/config"; 
import { users } from "../entity/users.entitie"; 

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

  async delete(id: number , user: string) {
    const utilisateur = await usersRepository.findOne({where : {id}})
    if(!utilisateur){return null}
    utilisateur.deleteBy = user
    await usersRepository.save(utilisateur)
    await usersRepository.softDelete({ id });
    return {message : `user id : ${id} delete by ${user}`}
  }

  async update(id: number, data: any) {
    usersRepository.update(id, data);
    return this.findOne(id);
  }
}
