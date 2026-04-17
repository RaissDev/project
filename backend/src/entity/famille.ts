import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToMany
} from "typeorm";
import { groupe } from "./groupe";

@Entity()
export class famille {
    @PrimaryGeneratedColumn()
    id!: number;
    @Column()
    nom!: string;
    @Column()
    code: string;

    @OneToMany(() => groupe, (group) => group.famillie)
    groupe!: groupe;
}
