import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToMany,
    JoinTable,
    OneToOne,
    JoinColumn,
    ManyToOne,
} from "typeorm";
import { famille } from "./famille";
import { Asset } from "./asset";
import { type_inspection } from "./type_inspection";

@Entity()
export class groupe {
    @PrimaryGeneratedColumn()
    id!: number;
    @Column()
    nom!: string;
    @Column()
    code!: string;

    @ManyToOne(() => famille, (fam) => fam.groupe)
    @JoinColumn({ name: "famille_id" })
    famillie: famille;

    @OneToMany(() => Asset, (actif) => actif.groupe)
    actif!: Asset[];

    @OneToMany(() => type_inspection, (type) => type.groupe)
    type!: type_inspection[];
}
