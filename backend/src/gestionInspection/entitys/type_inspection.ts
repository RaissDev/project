import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToMany,
    JoinColumn,
    ManyToOne,
} from "typeorm"; 
import { Inspection } from "./inspection";
import { groupe } from "../../GestionAsset/entitys/groupe";

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

    @ManyToOne(() => groupe, (group) => group.type)
    @JoinColumn({ name: "id_groupe" })
    groupe!: groupe;
}
