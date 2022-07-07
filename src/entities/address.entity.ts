import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity('addresses')
class Address {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    logradouro: string

    @Column()
    cep: string

    @Column({nullable: true})
    numero: string

    @Column({nullable: true})
    complemento: string

    @Column()
    cidade: string

    @Column({length: 2})
    estado: string

}

export { Address }