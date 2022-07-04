import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn } from "typeorm";
import { Address } from "./address.entity";

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
}

export { Property }