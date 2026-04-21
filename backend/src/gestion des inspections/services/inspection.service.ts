import { AppDataSource } from "../../config/config";
import { Inspection } from "../entities/inspection.entitie";
import { inspection_logs } from "../entities/inspectionLogs.entitie"; 

const inspectionRepository = AppDataSource.getRepository(Inspection);
const logsRepository = AppDataSource.getRepository(inspection_logs);

export class InspectionService {

  async changeStatus(id: number, newStatus: string, user: string) {
    const inspection = await inspectionRepository.findOneBy({ id });
    if (!inspection) {
      throw new Error("inspection not found");
    }
    const oldStatus = inspection.status
    inspection.status = newStatus;
    await inspectionRepository.save(inspection);

    const logs = logsRepository.create({
      description: `change status from ${oldStatus} to ${newStatus} by ${user}`,
      createBy: user,
      createAt: new Date(),
      inspection: inspection,
      statusApre : newStatus,
      statusAvon : oldStatus
    });
    await logsRepository.save(logs);
    return logs;
  }

  async create(Inspection: any) {
    const newGrourpe = inspectionRepository.create(Inspection);
    return await inspectionRepository.save(newGrourpe);
  }

  async findAll() {
    return await inspectionRepository.find();
  }

  async findOne(id: number) {
    return await inspectionRepository.findOneBy({ id });
  }

  async delete(id: number , user:string) {
    const inspection = await inspectionRepository.findOne({where :{id}})
    if(!inspection){return null}
    inspection.deleteBy = user
    await inspectionRepository.save(inspection)
    await inspectionRepository.softDelete({ id });
    return {message : `inspaction id : ${id} deleted by ${user}`}
  }

  async update(id: number, data: any) {
    await inspectionRepository.update(id, data);
    return this.findOne(id);
  }
}
