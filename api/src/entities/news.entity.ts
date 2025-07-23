import { PrimaryGeneratedColumn, Entity, Column } from "typeorm";

@Entity("news")
export class NewsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("text", { nullable: false })
  img: string;

  @Column("text") 
  title: string;

  @Column("text")
  date: string;

  @Column("text")
  about: string;
}