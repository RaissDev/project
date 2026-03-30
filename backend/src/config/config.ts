import "reflect-metadata";
import { DataSource } from "typeorm";
import { users } from "../entity/users";
import { Anomaly } from "../entity/anomaly";
import { Asset } from "../entity/asset";
import { Inspection } from "../entity/inspection";
export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "123456",
  database: "GMO",
  synchronize: true,
  logging: true,
  entities: [users, Anomaly, Asset, Inspection],
  subscribers: [],
  migrations: [],
});
