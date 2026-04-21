import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  JoinColumn,
  DeleteDateColumn
} from "typeorm";
import { users } from "../../gestion des utilisateurs/entity/users.entitie";
import { Anomalie } from "../../gestion des anomalies/entitys/anomaly.entitie";
import { Actif } from "../../Gestion des actifs/entities/actif.entitie";
import { type_inspection } from "./type_inspection.entitie";
import { inspection_logs } from "./inspectionLogs.entitie";
@Entity()
export class Inspection {
  @PrimaryGeneratedColumn()
  id!: number;
  @Column()
  date!: Date;
  @Column()
  priority!: string;
  @Column()
  description!: string;
  @Column()
  status!: string; // planifée /  en cours / terminée / validée / rejetée
  @OneToMany(() => users, (user) => user.inspeciton)
  @JoinColumn({ name: "inspector_id" })
  inspector!: users;

  @ManyToOne(() => Actif, (actif) => actif.inspection)
  @JoinColumn({ name: "asset_id" })
  asset!: Actif;

  @OneToMany(() => Anomalie, (anomaly) => anomaly.inspection)
  anomalies!: Anomalie[];

  @OneToMany(() => inspection_logs, (logs) => logs.inspection)
  logs!: inspection_logs[];

  @ManyToOne(() => type_inspection, (type) => type.Inspection)
  @JoinColumn({ name: "type_inspection_id" })
  typeInspection!: type_inspection;

  @Column()
  date_debut!: Date;
  @Column()
  date_fin!: Date;
  @ManyToOne(() => users, (user) => user.createInspection)
  create_by!: users;
  @Column()
  create_at!: Date;
  @ManyToOne(() => users, (user) => user.validateInspection)
  validiate_by!: users;
  @Column()
  validate_at!: Date;
  @Column()
  Commentare_validate!: string;
  @ManyToOne(() => users, (user) => user.rejectedInspection)
  rejected_by!: users;
  @Column()
  rejected_at!: Date;
  @Column()
  motif_rejecte!: string;
  @ManyToOne(() => users, (user) => user.cloturedInspection)
  clotured_by!: users;
  @Column()
  clotured_at!: Date;

  @DeleteDateColumn()
  deleteAt!: Date

  @Column()
  deleteBy!: string;
}
