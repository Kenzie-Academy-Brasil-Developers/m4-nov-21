import { Entity, Column, PrimaryGeneratedColumn, UpdateDateColumn, CreateDateColumn, Unique, OneToMany } from "typeorm"
import { Exclude } from "class-transformer"
import { Schedule } from "./schedule.entity"

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

    @Column({nullable: true})
    token_ativacao: string

    @Column({nullable: true})
    token_reset_password: string

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    @OneToMany(() => Schedule, schedule => schedule.user)
    schedules: Schedule[]

}

export { User }