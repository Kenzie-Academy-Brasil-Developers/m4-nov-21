import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn, ManyToOne } from "typeorm";
import { Address } from "./address.entity";
import { Category } from "./category.entity";

@Entity('properties')
class Property {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({default: false})
    vendido: boolean

    @Column({type: "decimal", precision: 12, scale: 2})
    valor: number

    @Column({type: "integer"})
    tamanho: number

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    @OneToOne(() => Address, {eager: true})
    @JoinColumn()
    address: Address

    @ManyToOne(() => Category, {nullable: true, eager: true})
    category: Category
}

export { Property }