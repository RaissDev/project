import { Entity , Column, PrimaryGeneratedColumn ,OneToMany} from 'typeorm';
import { Inspection } from './inspection';

@Entity()
export class users {
    @PrimaryGeneratedColumn()
    id!:number;
    @Column()
    name!:string;
    @Column()
    email!:string;
    @Column()
    password!:string;
    @Column()
    phone!:string;
    @Column()
    role!:string;
    @Column()
    photo_user!:string
    @OneToMany(()=>Inspection , inspection => inspection.inspector)
    inspeciton!: Inspection[]
}

