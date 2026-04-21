import "reflect-metadata";
import { DataSource } from "typeorm";
import { users } from "../gestion des utilisateurs/entity/users.entitie";
import { Anomalie } from "../gestion des anomalies/entitys/anomaly.entitie";
import { Actif } from "../Gestion des actifs/entities/actif.entitie";
import { Inspection } from "../gestion des inspections/entities/inspection.entitie";
import { type_inspection } from "../gestion des inspections/entities/type_inspection.entitie";
import { inspection_logs } from "../gestion des inspections/entities/inspectionLogs.entitie";
import { Groupe } from "../Gestion des actifs/entities/groupe.entitie";
import { Famille } from "../Gestion des actifs/entities/famille.entitie";
import { anomalie_logs } from "../gestion des anomalies/entitys/anomalieLogs.entitie";

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
    Anomalie,
    Actif,
    Inspection,
    type_inspection,
    Groupe,
    Famille,
    anomalie_logs,
    inspection_logs,
  ],
  subscribers: [],
  migrations: [],
});
