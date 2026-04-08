import { Entity ,Column, PrimaryGeneratedColumn , OneToMany,JoinColumn,ManyToOne} from 'typeorm';
import { Inspection } from './inspection';
import { groupe } from './groupe';

@Entity()
export class type_inspection {
    @PrimaryGeneratedColumn()
    id!:number
    @Column()
    nom!:string
    @Column()
    fequence!:string
    @ManyToOne(()=>Inspection,(inspection)=>inspection.id_type_inspection)
    type_inspection!:Inspection
    
    @ManyToOne(()=>groupe,(group)=>group.type)
    @JoinColumn({name:'id_groupe'})
    groupe!:groupe
}

