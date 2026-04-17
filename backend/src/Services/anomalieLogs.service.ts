import { AppDataSource } from "../config/config";
import { Anomaly } from "../entity/anomaly";
import { anomalie_logs } from "../entity/anomalieLogs";

const anomalieRepository = AppDataSource.getRepository(Anomaly);
const anomalieLogsRepository = AppDataSource.getRepository(anomalie_logs);

export class anomalieLogsService {

    async changStatus(id:number , newStatus:string , user:string){

        const anomalie = await anomalieRepository.findOneBy({id})
        if(!anomalie){
            throw new Error("anomalie not found");
        }

        const oldstatuss:string = anomalie.status;
        anomalie.status = newStatus;
        await anomalieLogsRepository.save(anomalie);
        
        const logs = anomalieLogsRepository.create({
            description: `statu changed from ${oldstatuss} to ${newStatus} by ${user}`,
            anomalie:anomalie,
            create_at : new Date(),
            create_by : user,
            status_before: oldstatuss,
            statusAvon_after : newStatus
        })
    }

    async findAll(){
        return await anomalieLogsRepository.find({})
    }
}