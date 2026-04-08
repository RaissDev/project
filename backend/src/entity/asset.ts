import { Entity ,Column, PrimaryGeneratedColumn , OneToMany,JoinColumn,ManyToOne} from 'typeorm';
import { Inspection } from './inspection';
import { groupe } from './groupe';

@Entity()
export class Asset {
    @PrimaryGeneratedColumn()
    id!: number;
    @Column()
    name!: string;
    @Column()
    type!: string;
    @Column()
    location!: number;

    @OneToMany(()=>Inspection , inspection => inspection.asset)
    inspection!: Inspection[]
    
    @ManyToOne(()=>groupe,(group)=>group.actif)
    @JoinColumn({name:'goupe_id'})
    groupe!:groupe;
}
