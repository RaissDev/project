import { anomalieLogsService } from "../Services/anomalieLogs.service";
import { Request, Response } from "express";


const logs = new anomalieLogsService()

export const logsController = {

    async findall(req:Request,res:Response){
        try{
            const result = await logs.findAll()
            res.json(result);
        }catch(e){
            res.status(400).json({ message: "error find all logs anomalie ", e });
        }
    }
}