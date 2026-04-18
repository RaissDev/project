import { AppDataSource } from "../../config/config";
import { famille } from "../entitys/famille";

const familleRepostory = AppDataSource.getRepository(famille);

export class familleServices {
  async create(famille) {
    const newFamille = familleRepostory.create(famille);
    return await familleRepostory.save(newFamille);
  }

  async findAll() {
    return familleRepostory.find();
  }

  async findOne(id: number) {
    return familleRepostory.findOneBy({ id });
  }

  async Delete(id: number) {
    return familleRepostory.softDelete(id);
  }

  async update(id: number, data: any) {
    return familleRepostory.update(id, data);
  }
}
