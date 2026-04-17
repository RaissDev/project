import { AppDataSource } from "../config/config";
import { Anomaly } from "../entity/anomaly"; 

const anomalieRepository = AppDataSource.getRepository(Anomaly);

export class anomalieService {

    async create(anomalie: any) {
        const newanomalie = anomalieRepository.create(anomalie);
        await anomalieRepository.save(newanomalie);
        return newanomalie;
    }

    async findAll() {
        return await anomalieRepository.find()
    }

    async findOne(id: number) {
        const anomalie = anomalieRepository.findOneBy({ id })
        return await anomalieRepository.findOneBy({ id })
    }

    async delete(id: number) {
        return await anomalieRepository.delete(id)
    }

    async softDelete(id: number) {
        return await anomalieRepository.softDelete({ id })
    }

    async update(id: number, newData: any) {
        await anomalieRepository.update(id, newData)
        return this.findOne(id)
    }
}
