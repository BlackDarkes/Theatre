import { PrimaryGeneratedColumn, Entity, Column } from "typeorm";

@Entity("premieres")
export class PremieresEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("text")
  img: string;

  @Column("text")
  date: string;

  @Column("text")
  age: string;

  @Column("text")
  title: string;

  @Column("text")
  about: string;
}