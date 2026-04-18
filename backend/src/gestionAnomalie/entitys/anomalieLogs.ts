import { Entity, Column, PrimaryGeneratedColumn ,ManyToOne, JoinColumn ,OneToMany} from 'typeorm';
import { Anomaly } from './anomaly';

@Entity()
export class anomalie_logs {
    @PrimaryGeneratedColumn()
    id!:number
    @Column()
    create_by!:string
    @Column()
    create_at!:Date
    @Column()
    description!:string

    @ManyToOne(() => Anomaly, (anomaly) => anomaly.logs )
    @JoinColumn({name:'anomalie_id'})
    anomalie!: Anomaly;
    @Column()
    status_before!:string
    @Column()
    statusAvon_after!:string
}

