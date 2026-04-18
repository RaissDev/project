import { Router } from "express";
import { logsInspectionController } from "../controllers/inspectionLogs.controller";

const router = Router();

router.get("/findAll", logsInspectionController.findAll);

export default router;
