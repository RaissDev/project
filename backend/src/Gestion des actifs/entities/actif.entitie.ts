import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinColumn,
  ManyToOne,
  DeleteDateColumn
} from "typeorm";
import { Inspection } from "../../gestion des inspections/entities/inspection.entitie";
import { Groupe } from "./groupe.entitie";

@Entity()
export class Actif {
  @PrimaryGeneratedColumn()
  id!: number;
  @Column()
  name!: string;
  @Column()
  type!: string;
  @Column()
  location!: string;

  @OneToMany(() => Inspection, (inspection) => inspection.asset)
  inspection!: Inspection[];

  @ManyToOne(() => Groupe, (group) => group.actif)
  @JoinColumn({ name: "group_id" })
  groupe!: Groupe;
  
  @DeleteDateColumn()
  deleteAt!: Date

  @Column({default: null})
  
  deleteBy!: string;

  
}
