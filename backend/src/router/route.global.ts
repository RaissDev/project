import { Router } from "express";

import assetRoutes from "../GestionAsset/routers/asset.routes";
import familleRoutes from "../GestionAsset/routers/famille.routes";
import groupRout from "../GestionAsset/routers/groupe.routes";
import inspectionRout from "../gestionInspection/routers/inspection.routes";
import userRout from "../gestionUsers/router/users.routes";

const router = Router();

router.use("/assets", assetRoutes);
router.use("/familles", familleRoutes);
router.use("/groupes", groupRout);
router.use("/inspections", inspectionRout);
router.use("/users", userRout);

export default router;  