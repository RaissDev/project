import { Router } from "express";
import { logsController } from "../Controller/anomalieLogs.controller";

const router = Router()



router.get('/logsAnomalie/findAll',logsController.findall)



export default router;