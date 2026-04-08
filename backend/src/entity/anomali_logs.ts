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
    descreption!:string

    @ManyToOne(() => Anomaly, (anomaly) => anomaly.logs )
    @JoinColumn({name:'Anomalie_id'})
    anomalie: Anomaly;
    
}

