import { AppDataSource } from "../../config/config";
import { Anomalie } from "../entitys/anomaly.entitie"; 
import { anomalie_logs } from "../entitys/anomalieLogs.entitie";
const anomalieRepository = AppDataSource.getRepository(Anomalie);
const anomalieLogsRepository = AppDataSource.getRepository(anomalie_logs);
export class AnomalieService {



  

  async changeStatus(id: number, newStatus: string, user: string) {
    const anomalie = await anomalieRepository.findOneBy({ id });
    if (!anomalie) {
      throw new Error("anomalie not found");
    }
    const oldstatuss: string = anomalie.status;
    anomalie.status = newStatus;
    await anomalieRepository.save(anomalie);

    const logs = anomalieLogsRepository.create({
      description: `statu changed from ${oldstatuss} to ${newStatus} by ${user}`,
      anomalie: anomalie,
      create_at: new Date(),
      create_by: user,
      statusApre: newStatus,
      statusAvon: oldstatuss,
    });
    await anomalieLogsRepository.save(logs);
    return logs;
  }

  async create(anomalie: any) {
    const newanomalie = anomalieRepository.create(anomalie);
    return await anomalieRepository.save(newanomalie);
  }

  async findAll() {
    return await anomalieRepository.find();
  }

  async findOne(id: number) {
    return await anomalieRepository.findOneBy({ id });
  }

  async delete(id: number , user :string) {
    const anomalie = await anomalieRepository.findOne({where : {id}})
    if(!anomalie){return null}
    anomalie.deleteBy = user
    await anomalieRepository.save(anomalie);
    await anomalieRepository.softDelete({ id });
    return {meassage : ` anomalie id : ${id} deleted by ${user}`}
  }

  async update(id: number, newData: any) {
    await anomalieRepository.update(id, newData);
    return this.findOne(id);
  }
}
