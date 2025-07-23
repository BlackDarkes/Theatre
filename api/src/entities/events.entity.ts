import { Entity, Column, PrimaryGeneratedColumn, Index } from 'typeorm';

@Entity('events')
export class EventsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "text", nullable: false })
  img: string;

  @Column({ type: "text", nullable: false })
  @Index()
  title: string;

  @Column("text")
  @Index()
  type: string;

  @Column('text')
  time: string;

  @Column('text')
  age: string;

  @Column('text', { array: true })
  about: string[];

  @Column('text', { array: true })
  actors: string[];

  @Column('text', { array: true })
  directors: string[];
}
