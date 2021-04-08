import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Carrera {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  nombre: string;

  @Column()
  duracion: number;
}
