import "reflect-metadata";
import { DataSource } from "typeorm";
import { users } from "../entity/users";
import { Anomaly } from "../entity/anomaly";
import { Asset } from "../entity/asset";
import { Inspection } from "../entity/inspection";
import { type_inspection } from "../entity/type_inspection";
import { inspection_logs } from "../entity/inspectio_logs";
import { groupe } from "../entity/groupe";
import { famille } from "../entity/famille";
import { anomalie_logs } from "../entity/anomalieLogs";

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
