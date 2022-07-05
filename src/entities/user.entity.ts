import { Entity, Column, PrimaryGeneratedColumn, UpdateDateColumn, CreateDateColumn, Unique } from "typeorm"
import { Exclude } from "class-transformer"

@Entity("users")
@Unique(["email"])
class User {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    nome: string

    @Column()
    email: string

    @Column()
    @Exclude()
    password: string

    @Column()
    adm: boolean

    @Column()
    ativo: boolean

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

}

export { User }