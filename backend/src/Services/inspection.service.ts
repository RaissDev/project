import { AppDataSource } from "../config/config";
import { Inspection } from "../entity/inspection"; 


const InspectionRepository = AppDataSource.getRepository(Inspection)

export class InspectionService {

    async create(Inspection:any){
        const newGrourpe = InspectionRepository.create(Inspection);
        await InspectionRepository.save(newGrourpe);
        return newGrourpe;
    }

    async findAll(){
        return InspectionRepository.find()
    }

    async findOne(id:number){
        return InspectionRepository.findOneBy({id})
    }

    async delete(id:number){
        return InspectionRepository.delete({id})
    }

    async softDelete(id:number){
        return InspectionRepository.softDelete({id})
    }

    async update(id:number , data:any){
        InspectionRepository.update(id,data)
        return this.findOne(id)
    }
}