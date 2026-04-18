import express from "express";
import { Router } from "express";
import { AppDataSource } from "../config/config";
import cors from "cors";
import globalRouter from '../router/route.global'
const port = 3004;
const app = express();
app.use(cors());
app.use(express.json());

app.use("/api",globalRouter );

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
