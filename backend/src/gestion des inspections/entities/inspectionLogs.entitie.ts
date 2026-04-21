import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { Inspection } from "./inspection.entitie";

@Entity()
export class inspection_logs {
  @PrimaryGeneratedColumn()
  id!: number;
  @Column()
  createBy!: string;
  @Column()
  createAt!: Date;
  @Column()
  description!: string;
  @Column()
  statusAvon!:string;
  @Column()
  statusApre!:string;
  @ManyToOne(() => Inspection, (inspeciton) => inspeciton.logs)
  @JoinColumn({ name: "inspeciton_id" })
  inspection: Inspection;
}
