import { AppDataSource } from "../../config/config";
import { inspection_logs } from "../entities/inspectionLogs.entitie"; 

const logsRepository = AppDataSource.getRepository(inspection_logs);

export class logsInspectionServices {

  async findAll() {
    return await logsRepository.find();
  }
}
