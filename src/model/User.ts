import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Client } from "./Client";

@Table({
  tableName: User.USER_TABLE_MODEL,
})
export class User extends Model {
  public static USER_TABLE_MODEL = "user" as string;
  public static USER_ID = "id" as string;
  public static USER_EMAIL = "email" as string;
  public static USER_PASSWORD = "password" as string;

  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: User.USER_ID,
  })
  id!: number;

  @Column({
    type: DataType.STRING(100),
    allowNull:false,
    field: User.USER_EMAIL,
  })
  email!: string;

  @Column({
    type: DataType.STRING(250),
    allowNull:false,
    field: User.USER_PASSWORD,
  })
  password!: string;
  

  @HasMany(() => Client)
  clients!: Client[];
}
