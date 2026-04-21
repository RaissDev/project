import { AppDataSource } from "../../config/config";
import { anomalie_logs } from "../entitys/anomalieLogs.entitie";

const anomalieLogsRepository = AppDataSource.getRepository(anomalie_logs);

export class anomalieLogsService {
 

  async findAll() {
    return await anomalieLogsRepository.find({});
  }
}
