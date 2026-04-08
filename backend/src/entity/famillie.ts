import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne
} from "typeorm";
import { groupe } from "./groupe";

@Entity()
export class famillie {
    @PrimaryGeneratedColumn()
    id!: number;
    @Column()
    nom!: string;
    @Column()
    code: string;

    @ManyToOne(() => groupe, (group) => group.famillie)
    groupe!: groupe;
}
