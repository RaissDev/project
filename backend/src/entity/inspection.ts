import { Entity, Column, PrimaryGeneratedColumn , ManyToOne, OneToMany, JoinColumn } from "typeorm";
import { users } from "./users";
import { Anomaly } from "./anomaly";
import { Asset } from "./asset";
import { type_inspection } from "./type_inspection";
import { inspection_logs } from "./inspectio_logs";
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

    @ManyToOne(() => users, user => user.inspeciton)
    @JoinColumn({ name: "inspector_id" })
    inspector!: users;

    
    @ManyToOne(() => Asset, asset => asset.inspection)
    @JoinColumn({ name: "asset_id" })
    asset!: Asset;
    
    @OneToMany(() => Anomaly, anomaly => anomaly.inspection)
    anomalies!: Anomaly[];

    @OneToMany(()=>inspection_logs,(logs)=>logs.inspection)
    logs!:inspection_logs[]

    @ManyToOne(()=>type_inspection,(type)=>type.type_inspection)
    @JoinColumn({name:'type_inspection_id'})
    typeInspection!:type_inspection
    @Column()
    date_debut!:Date;
    @Column()
    date_fin!:Date;
    @Column()
    create_by!:string
    @Column()
    create_at!:Date
    @Column()
    validiate_by!:string
    @Column()
    validate_at!:Date
    @Column()
    Commentare_validate!:string
    @Column()
    rejected_by!:string
    @Column()
    rejected_at!:Date
    @Column()
    motif_rejecte!:string
    @Column()
    clotured_by!:string
    @Column()
    clotured_at!:Date
}
