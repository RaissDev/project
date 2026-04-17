import { Entity, Column, PrimaryGeneratedColumn , ManyToOne, OneToMany, JoinColumn } from "typeorm";
import { Inspection } from "./inspection";

@Entity()
export class inspection_logs {
    @PrimaryGeneratedColumn()
    id!:number
    @Column()
    create_by!:string
    @Column()
    create_at!:Date
    @Column()
    description!:string
    @ManyToOne(()=>Inspection,(inspection)=>inspection.logs)
    @JoinColumn({name:'id_inspection'})
    inspection!:Inspection
}

