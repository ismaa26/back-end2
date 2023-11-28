import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, BaseEntity } from 'typeorm';

@Entity()
export class Products extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    price: number;

    @Column()
    description: string;

    @Column({
        default: true
    })
    active: boolean;

    @CreateDateColumn()
    created: Date;

    @UpdateDateColumn()
    updated: Date;

}