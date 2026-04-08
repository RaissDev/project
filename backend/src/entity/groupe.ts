import { Entity ,PrimaryGeneratedColumn ,Column ,OneToMany ,JoinTable ,OneToOne,JoinColumn} from 'typeorm';
import { famillie } from './famillie';
import { Asset } from './asset';
import { type_inspection } from './type_inspection';

@Entity()
export class groupe {
    @PrimaryGeneratedColumn()
    id!:number
    @Column()
    nome!:string
    @Column()
    code!:string

    @OneToMany(()=>famillie,(fam)=>fam.groupe)
    famillie:famillie[]

    @OneToMany(()=>Asset,(actif)=>actif.groupe)
    actif!:Asset[]

    @OneToMany(()=>type_inspection,(type)=>type.groupe)
    type!:type_inspection[]
}

