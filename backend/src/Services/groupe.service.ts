import { AppDataSource } from "../config/config";
import { groupe } from "../entity/groupe";


const groupeRepository = AppDataSource.getRepository(groupe)

export class groupeService {

    async create(groupe:any){
        const newGrourpe = groupeRepository.create(groupe);
        await groupeRepository.save(newGrourpe);
        return newGrourpe;
    }

    async findAll(){
        return groupeRepository.find()
    }

    async findOne(id:number){
        return groupeRepository.findOneBy({id})
    }

    async delete(id:number){
        return groupeRepository.delete({id})
    }

    async softDelete(id:number){
        return groupeRepository.softDelete({id})
    }

    async update(id:number , data:any){
        groupeRepository.update(id,data)
        return this.findOne(id)
    }
}