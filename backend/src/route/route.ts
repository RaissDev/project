import express from "express";
import { Router } from "express";
import { AppDataSource } from "../config/config";
import cors from "cors";
import { users } from "../entity/users";
import { Anomaly } from "../entity/anomaly";
import { Asset } from "../entity/asset";
import { CorrectAction } from "../entity/correctAction"; 
import { Inspection } from "../entity/inspection";
const port = 3004;
const app = express();
const router = Router();
router.use(cors());
router.use(express.json());


router.get("/users", async (req, res) => {
  const user = await AppDataSource.getRepository(users).find();
  res.json(user);
});

router.get("/anomaly", async (req, res) => {
  const anomaly = await AppDataSource.getRepository(Anomaly).find();
  res.json(anomaly);
});

router.get("/asset", async (req, res) => {
  const asset = await AppDataSource.getRepository(Asset).find();
  res.json(asset);
});

router.get("/correctAction", async (req, res) => {
  const correctAction = await AppDataSource.getRepository(CorrectAction).find();
  res.json(correctAction);
});

router.get("/inspection", async (req, res) => {
  const inspection = await AppDataSource.getRepository(Inspection).find();
  res.json(inspection);
});





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
