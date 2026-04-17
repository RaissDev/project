import { Router } from "express";
import { logsInspectionController } from "../Controller/inspectionLogs.controller";

const router = Router()

router.get('/logsAnomalie/findAll',logsInspectionController.findAll)

export default router;