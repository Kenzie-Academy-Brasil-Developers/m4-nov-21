import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Property } from "./property.entity";
import { User } from "./user.entity";

@Entity('schedules_users_properties')
class Schedule {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({type: 'timestamp'})
    horario_visita: Date

    @ManyToOne(() => User, {eager: true})
    user: User

    @ManyToOne(() => Property)
    property: Property

}

export { Schedule }