import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinColumn,
  ManyToOne,
} from "typeorm";
import { Inspection } from "./inspection.entitie";
import { Groupe } from "../../Gestion des actifs/entities/groupe.entitie";

@Entity()
export class type_inspection {
  @PrimaryGeneratedColumn()
  id!: number;
  @Column()
  nom!: string;
  @Column()
  fequence!: string;
  @OneToMany(() => Inspection, (inspection) => inspection.typeInspection)
  Inspection!: Inspection[];

  @ManyToOne(() => Groupe, (group) => group.type)
  @JoinColumn({ name: "id_groupe" })
  groupe!: Groupe;
}
