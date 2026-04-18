import { Entity, PrimaryGeneratedColumn ,Column ,ManyToOne,JoinColumn} from 'typeorm';
import { Inspection } from './inspection';

@Entity()
export class inspection_logs {
    @PrimaryGeneratedColumn()
    id!: number;
    @Column()
    create_by!:string
    @Column()
    create_at!:Date
    @Column()
    description!:string
    @ManyToOne(()=>Inspection,(inspeciton)=>inspeciton.logs)
    @JoinColumn({name:'inspeciton_id'})
    inspection: Inspection


}

