import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity()
export class Recado {
  @PrimaryGeneratedColumn("uuid", {
    name: "uid",
  })
  uid: string;

  @Column()
  descricao: string;

  @Column({
    nullable: true,
  })
  detalhamento: string;

  @CreateDateColumn()
  created_at: Date;
}
