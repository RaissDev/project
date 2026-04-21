import { Router } from "express";

import assetRoutes from "../Gestion des actifs/routers/asset.routes";
import familleRoutes from "../Gestion des actifs/routers/famille.routes";
import groupRoutes from "../Gestion des actifs/routers/groupe.routes";
import inspectionRoutes from "../gestion des inspections/routers/inspection.routes";
import userRoutes from "../gestion des utilisateurs/router/users.routes";
import logsInspections from "../gestion des inspections/routers/inspectionLogs.routes"
import logsAnomalies from "../gestion des anomalies/routers/anomalieLogs.routes"
const router = Router();

router.use("/actifs", assetRoutes);
router.use("/familles", familleRoutes);
router.use("/groupes", groupRoutes);
router.use("/inspections", inspectionRoutes);
router.use("/users", userRoutes);
router.use("/logsAnomalie",logsAnomalies)
router.use("/logsInspection",logsInspections)

export default router;
