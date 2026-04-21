import { AppDataSource } from "../../config/config";
import { Famille } from "../entities/famille.entitie";

const familleRepostory = AppDataSource.getRepository(Famille);

export class FamilleServices {
  async create(famille) {
    const newFamille = familleRepostory.create(famille);
    return await familleRepostory.save(newFamille);
  }

  async findAll() {
    return await familleRepostory.find();
  }

  async findOne(id: number) {
    return await familleRepostory.findOneBy({ id });
  }

  async delete(id: number, user :string) {
    const famille = await familleRepostory.findOne({where:{id}})
    if (!famille) {return null}
    famille.deleteBy = user
    await familleRepostory.save(famille)
    await familleRepostory.softDelete(id)
    return {message : `id : ${id} deleted by user : ${user}`}
  }

  async update(id: number, data: any) {
    return await familleRepostory.update(id, data);
  }
}
