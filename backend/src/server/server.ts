import express from "express";
import { Router } from "express";
import { AppDataSource } from "../config/config";
import cors from "cors";
import assetRoutes from '../router/asset.routes'
import familleRoutes from '../router/famille.routes'
import groupRout from '../router/groupe.routes'
import inspectionRout from '../router/inspection.routes'
import userRout from '../router/users.routes'
const port = 3004;
const app = express();
const router = Router();
router.use(cors());
router.use(express.json());

app.use('/api/assets',assetRoutes)
app.use('/api/groupes',familleRoutes)
app.use('/api/familles',groupRout)
app.use('/api/inspections',inspectionRout)
app.use('/api/users',userRout)



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
