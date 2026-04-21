import {
  Entity,
  Column,
  OneToMany,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  DeleteDateColumn,
} from "typeorm";
import { Inspection } from "../../gestion des inspections/entities/inspection.entitie";
import { anomalie_logs } from "./anomalieLogs.entitie";
@Entity()
export class Anomalie {
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

    @DeleteDateColumn()
        deleteAt!: Date
      
        @Column()
        deleteBy!: string;
}
