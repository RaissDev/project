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
            const data = groupe.findAll();
            res.json(data);
        } catch (e) {
            res.status(400).json({ message: "error find all groupe ", e });
        }
    },

    async findOne(req: Request, res: Response) {
        try {
            const id = Number(req.params.id)
            const data = groupe.findOne(id)
            res.json(data)
        } catch (e) {
            res.status(400).json({ message: "error find one groupe ", e });
        }
    },

    async update(req: Request, res: Response) {
        try {
            const id = Number(req.params.id)
            const result = groupe.update(id, req.body)
        } catch (e) {
            res.status(400).json({ message: "error Update groupe ", e });
        }
    },

    async delete(req: Request, res: Response) {
        try {
            const id = Number(req.params.id)
            const result = groupe.delete(id)
            res.json(result)
        } catch (e) {
            res.status(400).json({ message: "error Update groupe ", e });
        }
    },

    async softDelete(req: Request, res: Response) {
        try {
            const id = Number(req.params.id)
            const result = groupe.softDelete(id)
            if ((await result).affected === 0) {
                res.status(404).json({ error: "Inspection not found" });
            } else {
                res.json({ message: "Inspection deleted successfully" });
            }
            res.json(result)
        } catch (e) {
            res.status(400).json({ message: "error Update groupe ", e });
        }
    }

};
