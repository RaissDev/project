import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from "typeorm";
import { users } from "../../gestionUsers/entity/users";
import { Anomaly } from "../../gestionAnomalie/entitys/anomaly";
import { Asset } from "../../GestionAsset/entitys/asset";
import { type_inspection } from "../../gestionUsers/entity/type_inspection";
import { inspection_logs } from "../../gestionUsers/entity/inspectio_logs";
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

  @ManyToOne(() => Asset, (asset) => asset.inspection)
  @JoinColumn({ name: "asset_id" })
  asset!: Asset;

  @OneToMany(() => Anomaly, (anomaly) => anomaly.inspection)
  anomalies!: Anomaly[];

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
}
