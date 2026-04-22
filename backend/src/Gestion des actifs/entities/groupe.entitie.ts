import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  JoinColumn,
  ManyToOne,
  DeleteDateColumn
} from "typeorm";
import { Famille } from "./famille.entitie";
import { Actif } from "./actif.entitie";
import { type_inspection } from "../../gestion des inspections/entities/type_inspection.entitie";

@Entity()
export class Groupe {
  @PrimaryGeneratedColumn()
  id!: number;
  @Column()
  nom!: string;
  @Column()
  code!: string;

  @ManyToOne(() => Famille, (fam) => fam.groupe)
  @JoinColumn({ name: "famille_id" })
  famillie: Famille;

  @OneToMany(() => Actif, (actif) => actif.groupe)
  actif!: Actif[];

  @OneToMany(() => type_inspection, (type) => type.groupe)
  type!: type_inspection[];

  @DeleteDateColumn()
      deleteAt!: Date
    
      @Column({nullable:true})
      deleteBy!: string;
}
