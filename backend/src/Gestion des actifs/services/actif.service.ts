import { AppDataSource } from "../../config/config";
import { Actif } from "../entities/actif.entitie";

const actifRepository = AppDataSource.getRepository(Actif);

export class ActifService {
  async create(actif: any) {
    const newActif = actifRepository.create(actif);
    return await actifRepository.save(newActif);
  }

  async findAll() {
    return await actifRepository.find();
  }

  async findOne(id: number) {
    return await actifRepository.findOneBy({ id });
  }

  async delete(id: number , user:string) {
    const actif = await actifRepository.findOne({where:{id}})
    if(!actif){return null}
    actif.deleteBy = user
    await actifRepository.save(actif);
    await actifRepository.softDelete({ id });
    return {message : `id : ${id} deleted by user : ${user}`}
  }

  async update(id: number, newData: any) {
    await actifRepository.update(id, newData);
    return this.findOne(id);
  }
}
