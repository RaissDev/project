import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  DeleteDateColumn
} from "typeorm";
import { Inspection } from "../../gestion des inspections/entities/inspection.entitie";

@Entity()
export class users {
  @PrimaryGeneratedColumn()
  id!: number;
  @Column()
  name!: string;
  @Column()
  email!: string;
  @Column()
  password!: string;
  @Column()
  phone!: string;
  @Column()
  role!: string;
  @Column()
  photo_user!: string;
  @ManyToOne(() => Inspection, (inspection) => inspection.inspector)
  inspeciton!: Inspection[];
  @OneToMany(() => Inspection, (inspection) => inspection.create_by)
  createInspection: Inspection[];
  @OneToMany(() => Inspection, (inspection) => inspection.rejected_by)
  rejectedInspection: Inspection[];
  @OneToMany(() => Inspection, (inspection) => inspection.validiate_by)
  validateInspection: Inspection[];
  @OneToMany(() => Inspection, (inspection) => inspection.clotured_by)
  cloturedInspection: Inspection[];

  @DeleteDateColumn()
            deleteAt!: Date
          
            @Column()
            deleteBy!: string;
}
