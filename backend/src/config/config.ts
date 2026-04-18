import "reflect-metadata";
import { DataSource } from "typeorm";
import { users } from "../gestionUsers/entity/users";
import { Anomaly } from "../gestionAnomalie/entitys/anomaly";
import { Asset } from "../GestionAsset/entitys/asset";
import { Inspection } from "../gestionInspection/entitys/inspection";
import { type_inspection } from "../gestionInspection/entitys/type_inspection";
import { inspection_logs } from "../gestionInspection/entitys/inspectionLogs"; 
import { groupe } from "../GestionAsset/entitys/groupe";
import { famille } from "../GestionAsset/entitys/famille";
import { anomalie_logs } from "../gestionAnomalie/entitys/anomalieLogs";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "123456",
  database: "GMO",
  synchronize: true,
  logging: true,
  entities: [
    users,
    Anomaly,
    Asset,
    Inspection,
    type_inspection,
    groupe,
    famille,
    anomalie_logs,
    inspection_logs,
  ],
  subscribers: [],
  migrations: [],
});
