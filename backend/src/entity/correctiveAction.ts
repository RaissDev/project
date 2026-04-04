import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class CorrectiveAction {
    @PrimaryGeneratedColumn()
    id!: number;
    @Column()
    action!: string;
    @Column()
    status!: string;
    @Column()
    anomaly_id!:number
    
}
