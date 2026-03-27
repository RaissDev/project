import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Inspection {
    @PrimaryGeneratedColumn()
    id!: number;
    @Column()
    date!: Date;
    @Column()
    status!: string;
    @Column()
    priority!: string;
    @Column()
    descreption!: string;
}
