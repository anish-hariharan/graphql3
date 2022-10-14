import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm"
import { User } from "./User";

@Entity()
export class Profile {
    
    @PrimaryGeneratedColumn()
    id: number 

    @Column()
    gender: string;

    @Column()
    age: number 

    @OneToOne(() => User, user => user.profile)
    user: User
}
