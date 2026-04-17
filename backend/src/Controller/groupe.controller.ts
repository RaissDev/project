import { Request, Response } from "express";
import { groupeService } from "../Services/groupe.service";

const groupe = new groupeService();

export const groupeController = {
    async create(req: Request, res: Response) {
        try {
            const result = await groupe.create(req.body);
            res.json(result);
        } catch (e) {
            res.status(400).json({ message: "error create groupe ", e });
        }
    },

    async findAll(req: Request, res: Response) {
        try {
            const data = await groupe.findAll();
            res.status(200).json(data);
        } catch (e) {
            res.status(400).json({ message: "error find all groupe ", e });
        }
    },

    async findOne(req: Request, res: Response) {
        try {
            const id = Number(req.params.id)
            const data = await groupe.findOne(id)
            res.json(data)
        } catch (e) {
            res.status(400).json({ message: "error find one groupe ", e });
        }
    },

    async update(req: Request, res: Response) {
        try {
            const id = Number(req.params.id)
            const result = await groupe.update(id, req.body)
            res.status(200).json(result)
        } catch (e) {
            res.status(400).json({ message: "error Update groupe ", e });
        }
    },

    async delete(req: Request, res: Response) {
        try {
            const id = Number(req.params.id)
            const result = await groupe.delete(id)
            res.json(result)
        } catch (e) {
            res.status(400).json({ message: "error Update groupe ", e });
        }
    },

    async softDelete(req: Request, res: Response) {
        try {
            const id = Number(req.params.id)
            const result = await groupe.softDelete(id)
            if ((await result).affected === 0) {
                res.status(404).json({ error: "Inspection not found" });
            } else {
                res.json({ message: "Inspection sofe deleted successfully" });
            }
            res.json(result)
        } catch (e) {
            res.status(400).json({ message: "error Update groupe ", e });
        }
    }

};
