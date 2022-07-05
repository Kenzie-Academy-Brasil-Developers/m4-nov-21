import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Property } from "./property.entity";

@Entity('categories')
class Category {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({unique: true, length: 25})
    nome: string

    @OneToMany(() => Property, property => property.category)
    properties: Property[]

}

export { Category }