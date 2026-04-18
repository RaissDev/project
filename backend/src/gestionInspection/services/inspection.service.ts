import { AppDataSource } from "../../config/config";
import { Inspection } from "../entitys/inspection";

const InspectionRepository = AppDataSource.getRepository(Inspection);

export class InspectionService {
  async create(Inspection: any) {
    const newGrourpe = InspectionRepository.create(Inspection);
    return await InspectionRepository.save(newGrourpe);
  }

  async findAll() {
    return InspectionRepository.find();
  }

  async findOne(id: number) {
    return InspectionRepository.findOneBy({ id });
  }

  async Delete(id: number) {
    return InspectionRepository.softDelete({ id });
  }

  async update(id: number, data: any) {
    InspectionRepository.update(id, data);
    return this.findOne(id);
  }
}
