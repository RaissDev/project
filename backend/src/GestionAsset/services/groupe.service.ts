import { AppDataSource } from "../../config/config";
import { groupe } from "../entitys/groupe";

const groupeRepository = AppDataSource.getRepository(groupe);

export class groupeService {
  async create(groupe: any) {
    const newGrourpe = groupeRepository.create(groupe);
    return await groupeRepository.save(newGrourpe);
  }

  async findAll() {
    return groupeRepository.find();
  }

  async findOne(id: number) {
    return groupeRepository.findOneBy({ id });
  }

  async Delete(id: number) {
    return groupeRepository.softDelete({ id });
  }

  async update(id: number, data: any) {
    groupeRepository.update(id, data);
    return this.findOne(id);
  }
}
