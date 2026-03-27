import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Anomaly {
    @PrimaryGeneratedColumn()
    id!: number
    @Column()
    description!: string;
    @Column()
    status!: string;
    @Column()
    deadline!: Date;

}

