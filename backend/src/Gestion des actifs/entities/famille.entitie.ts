import { Entity, PrimaryGeneratedColumn, Column, OneToMany,DeleteDateColumn } from "typeorm";
import { Groupe } from "./groupe.entitie";

@Entity()
export class Famille {
  @PrimaryGeneratedColumn()
  id!: number;
  @Column()
  nom!: string;
  @Column()
  code: string;

  @OneToMany(() => Groupe, (group) => group.famillie)
  groupe!: Groupe[];

  @DeleteDateColumn()
    deleteAt!: Date
  
    @Column()
    deleteBy!: string;
}
