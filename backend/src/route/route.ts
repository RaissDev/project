import express from "express";
import { Router } from "express";
import { AppDataSource } from "../config/config";
import cors from "cors";
import { users } from "../entity/users";
import { Anomaly } from "../entity/anomaly";
import { Asset } from "../entity/asset";
import { Inspection } from "../entity/inspection";
const port = 3004;
const app = express();
const router = Router();
router.use(cors());
router.use(express.json());
app.use(router);

router.get("/users", async (req, res) => {
  const user = await AppDataSource.getRepository(users).find();
  res.json(user);
});


router.post("/users/add", async (req, res) => {
  try {
    const repo = AppDataSource.getRepository(users);
    const newUser = repo.create(req.body);
    await repo.save(newUser);
    res.json(newUser);
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
router.delete("/users/delete/:id" , async (req , res)=>{
  try{
    const repo = AppDataSource.getRepository(users)
    const result = await  repo.delete(req.params.id)
    if (result.affected === 0) {
      res.status(404).json({ error: "Inspection not found" });
    } else {
      res.json({ message: "Inspection deleted successfully" });
    }
  }catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
})

router.get("/anomaly", async (req, res) => {
  const anomaly = await AppDataSource.getRepository(Anomaly).find();
  res.json(anomaly);
});

router.get("/asset", async (req, res) => {
  const asset = await AppDataSource.getRepository(Asset).find();
  res.json(asset);
});

// router.get("/correctivtAction", async (req, res) => {
//   const correctAction = await AppDataSource.getRepository(CorrectiveAction).find();
//   res.json(correctAction);
// });

router.get("/inspection", async (req, res) => {
  const inspection = await AppDataSource.getRepository(Inspection).find();
  res.json(inspection);
});

router.delete("/inspection/delete/:id", async (req, res) => {
  try {
    const repo = AppDataSource.getRepository(Inspection);
    const result = await repo.delete(req.params.id);
    if (result.affected === 0) {
      res.status(404).json({ error: "Inspection not found" });
    } else {
      res.json({ message: "Inspection deleted successfully" });
    }
  } catch (error) {
    console.error("Error deleting inspection:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/inspection/add", async (req, res) => {
  try {
    const repo = AppDataSource.getRepository(Inspection);
    const newInspection = repo.create(req.body);
    await repo.save(newInspection);
    res.json(newInspection);
  } catch (error) {
    console.error("Error creating inspection:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.put("/inspection/update/:id", async (req, res) => {
  try {
    const repo = AppDataSource.getRepository(Inspection); 
    const inspection = await repo.findOneBy({ id: parseInt(req.params.id) });
    if (!inspection) {
      return res.status(404).json({ error: "Inspection not found" });
    }
    repo.merge(inspection, req.body);
    const updatedInspection = await repo.save(inspection);
    res.json(updatedInspection);
  } catch (error) {
    console.error("Error updating inspection:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
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
