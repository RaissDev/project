import { AppDataSource } from "../../config/config";
import { inspection_logs } from "../../gestionUsers/entity/inspectio_logs";
import { Inspection } from "../entitys/inspection";

const inspectionRepository = AppDataSource.getRepository(Inspection);
const logsRepository = AppDataSource.getRepository(inspection_logs);

export class logsInspectionServices {
  async changeStatus(id: number, newStatus: string, user: string) {
    const inspection = await inspectionRepository.findOneBy({ id });
    if (!inspection) {
      throw new Error("inspection not found");
    }
    const oldstatus = inspection.status;
    inspection.status = newStatus;
    await inspectionRepository.save(inspection);

    const logs = logsRepository.create({
      description: ` status changed from ${oldstatus} to ${newStatus} by ${user}`,
      create_by: user,
      create_at: new Date(),
      inspection: inspection,
    });
    await logsRepository.save(logs);
    return logs;
  }

  async findAll() {
    return await logsRepository.find();
  }
}
