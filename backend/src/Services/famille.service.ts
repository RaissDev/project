import { AppDataSource } from "../config/config";
import { famille } from "../entity/famille";

const familleRepostory = AppDataSource.getRepository(famille)

export class familleServices{

    async create(famille){
        const newFamille = familleRepostory.create(famille)
        await familleRepostory.save(newFamille)
        return newFamille;
    }

    async findAll(){
        return familleRepostory.find()
    }

    async findOne(id:number){
        return familleRepostory.findOneBy({id})
    }

    async delete(id:number){
        return familleRepostory.delete(id)
    }

    async softDelete(id:number){
        return familleRepostory.softDelete(id)
    }

    async update(id:number,data:any){
        return familleRepostory.update(id,data)
    }
}