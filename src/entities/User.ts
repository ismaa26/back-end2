import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, BaseEntity } from 'typeorm';

@Entity()
export class User extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre_de_usuario: string;

    @Column()
    email: string;

    @Column()
    contraseña: string;

    @Column()
    repetir_contraseña: string;

    @Column({
        default: true
    })
    active: boolean;

    @CreateDateColumn()
    created: Date;

    @UpdateDateColumn()
    updated: Date;

}