import { Entity, Column,OneToMany, PrimaryGeneratedColumn ,ManyToOne, JoinColumn ,OneToOne } from 'typeorm';
import { Inspection } from './inspection';
import { anomalie_logs } from './anomali_logs';

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
    @ManyToOne(()=>Inspection ,inspection =>inspection.anomalies)
    @JoinColumn({ name: 'inspection_id'})
    inspection!:Inspection
    @Column()
    create_at!: Date

    @OneToMany(()=>anomalie_logs,(logs)=>logs.id_anomalie)
    anomalie!:anomalie_logs
    
}

