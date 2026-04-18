import {
  Entity,
  Column,
  OneToMany,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  OneToOne,
} from "typeorm";
import { Inspection } from "../../gestionInspection/entitys/inspection";
import { anomalie_logs } from "./anomalieLogs";
@Entity()
export class Anomaly {
  @PrimaryGeneratedColumn()
  id!: number;
  @Column()
  description!: string;
  @Column()
  status!: string; // ouverte / en analyse / en cours / résolue / clôturée
  @Column()
  deadline!: Date;
  @ManyToOne(() => Inspection, (inspection) => inspection.anomalies)
  @JoinColumn({ name: "inspection_id" })
  inspection!: Inspection;
  @Column()
  create_at!: Date;

  @OneToMany(() => anomalie_logs, (logs) => logs.anomalie)
  logs!: anomalie_logs[];
}
