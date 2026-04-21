import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from "typeorm";
import { Anomalie } from "./anomaly.entitie";

@Entity()
export class anomalie_logs {
  @PrimaryGeneratedColumn()
  id!: number;
  @Column()
  create_by!: string;
  @Column()
  create_at!: Date;
  @Column()
  description!: string;

  @ManyToOne(() => Anomalie, (anomaly) => anomaly.logs)
  @JoinColumn({ name: "anomalie_id" })
  anomalie!: Anomalie;
  @Column()
  statusApre!: string;
  @Column()
  statusAvon!: string;
}
