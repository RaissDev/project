import express from "express";
import { Router } from "express";
import { AppDataSource } from "../config/config";
import cors from "cors";
import assetRoutes from "../GestionAsset/routers/asset.routes";
import familleRoutes from "../GestionAsset/routers/famille.routes";
import groupRout from "../GestionAsset/routers/groupe.routes";
import inspectionRout from "../gestionInspection/routers/inspection.routes";
import userRout from "../gestionUsers/router/users.routes";
const port = 3004;
const app = express();
const router = Router();
router.use(cors());
router.use(express.json());

app.use("/api/assets", assetRoutes);
app.use("/api/groupes", familleRoutes);
app.use("/api/familles", groupRout);
app.use("/api/inspections", inspectionRout);
app.use("/api/users", userRout);

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
    app.listen(port, () => {
      console.log("Server is running on port " + port);
    });
  })
  .catch((error) =>
    console.error("Error during Data Source initialization:", error),
  );

export default router;
