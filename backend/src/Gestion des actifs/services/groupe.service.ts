import { IsNull, Not } from "typeorm";
import { AppDataSource } from "../../config/config";
import { Groupe } from "../entities/groupe.entitie";

const groupeRepository = AppDataSource.getRepository(Groupe);

export class GroupeService {
  async create(groupe: any) {
    const newGrourpe = groupeRepository.create(groupe);
    return await groupeRepository.save(newGrourpe);
  }

  async findAll() {
    return await groupeRepository.find();
  }

  async findAllDeleted() {
      return await groupeRepository.find({withDeleted:true ,where : {deleteAt: Not(IsNull())} });
    }

  async findOne(id: number) {
    return await groupeRepository.findOneBy({ id });
  }

  async delete(id: number, user : string) {
    const groupe = await groupeRepository.findOne({where :{id}})
    if(!groupe){return null}
    groupe.deleteBy = user
    await groupeRepository.save(groupe)
    await groupeRepository.softDelete({ id });
    return {message : `id : ${id} delete by user : ${user}`}
  }

  async restore(id:number){
    const result = await groupeRepository.restore(id)
    if(result.affected === 0){return null}
    return {message : 'groupe restore successfolly'};
  }

  async update(id: number, data: any) {
    await groupeRepository.update(id, data);
    return this.findOne(id);
  }
}
