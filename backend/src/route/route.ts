import express from "express";
import { Router } from "express";
import { AppDataSource } from "../config/config";
import cors from "cors";
import { users } from "../entity/users";
import { Anomaly } from "../entity/anomaly";
import { Asset } from "../entity/asset";
import { CorrectAction } from "../entity/correctAction"; 
import { Inspection } from "../entity/inspection";






const router = Router();
router.use(cors());
router.use(express.json());






AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((error) =>
    console.error("Error during Data Source initialization:", error),
  );

export default router;
