import { Router } from "express";
import { logsController } from "../controllers/anomalieLogs.controller";

const router = Router();

router.get("/findAll", logsController.findall);

export default router;
