import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'test_table', synchronize: false})
export class Test { // class 이름이 table 이름
  @PrimaryGeneratedColumn()
  @PrimaryColumn()
  test_table_id: number;

  @PrimaryColumn()
  second_id: number;

  @Column("char", { length: 30 })
  etc_col: string;
}
