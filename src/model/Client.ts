import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasOne,
  Model,
  Table,
} from "sequelize-typescript";
import { User } from "./User";
import { AuditLog } from "./AuditLog";

@Table({
  tableName: Client.CLIENT_TABLE_MODEL,
})
export class Client extends Model {
  public static CLIENT_TABLE_MODEL = "client" as string;
  public static CLIENT_ID = "id" as string;
  public static CLIENT_FIRST_NAME = "firstName" as string;
  public static CLIENT_SECOND_NAME = "secondName" as string;
  public static CLIENT_FIRST_SURNAME = "firstSurname" as string;
  public static CLIENT_SECOND_SURNAME = "secondSurname" as string;
  public static CLIENT_FIRST_ADRESS = "firstAdress" as string;
  public static CLIENT_SECOND_ADRESS = "secondAdress" as string;
  public static CLIENT_DUI = "dui" as string;
  public static CLIENT_NIT = "nit" as string;
  public static USER_ID = "userId" as string;

  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: Client.CLIENT_ID,
  })
  id!: number;

  @Column({
    type: DataType.STRING(100),
    allowNull:false,
    field: Client.CLIENT_FIRST_NAME,
  })
  firstName!: string;
  @Column({
    type: DataType.STRING(100),
    allowNull:false,
    field: Client.CLIENT_SECOND_NAME,
  })
  secondName!: string;
  @Column({
    type: DataType.STRING(100),
    allowNull:false,
    field: Client.CLIENT_FIRST_SURNAME,
  })
  firstSurname!: string;
  @Column({
    type: DataType.STRING(100),
    allowNull:false,
    field: Client.CLIENT_SECOND_SURNAME,
  })
  secondSurname!: string;
  @Column({
    type: DataType.STRING(200),
    allowNull:false,
    field: Client.CLIENT_FIRST_ADRESS,
  })
  firstAdress!: string;
  @Column({
    type: DataType.STRING(200),
    allowNull:true,
    field: Client.CLIENT_SECOND_ADRESS,
  })
  secondAdress?: string;
  @Column({
    type: DataType.INTEGER,
    allowNull:false,
    field: Client.CLIENT_DUI,
  })
  dui!: number;
  @Column({
    type: DataType.INTEGER,
    allowNull:true,
    field: Client.CLIENT_NIT,
  })
  nit!: number;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull:false,
    field: Client.USER_ID,
  })
  userId!: number;

  @BelongsTo(() => User)
  user!: User;
   @HasOne(() => AuditLog)
  audits!: AuditLog[]; 
}

