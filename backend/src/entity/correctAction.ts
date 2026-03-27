import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class CorrectAction {
    @PrimaryGeneratedColumn()
    id!: number;
    @Column()
    action!: string;
    @Column()
    status!: string;
}
