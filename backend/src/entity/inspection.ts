import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Inspection {
    @PrimaryGeneratedColumn()
    id!: number;
    @Column()
    date!: Date;
    @Column()
    type_actife!: string;
    @Column()
    inspecteur!: string;
    @Column()
    priority!: string;
    @Column()
    description!: string;
    
}
