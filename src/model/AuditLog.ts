import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Client } from "./Client";




@Table({
    tableName: AuditLog.AUDIT_LOG_TABLE_MODEL
})

export class AuditLog extends Model {
  public static AUDIT_LOG_TABLE_MODEL = 'auditLog' as string;
  public static AUDIT_LOG_ID = 'id' as string;
  public static AUDIT_LOG_ACTION = 'action' as string;
  public static AUDIT_LOG_OLD_VALUES = 'oldValues' as string;
  public static AUDIT_LOG_NEW_VALUES = 'newValues' as string;
  public static CLIENT_ID = "clientId" as string;
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: AuditLog.AUDIT_LOG_ID,
  })
  id!: number;
  @Column({
    type: DataType.STRING(25),
    allowNull:false,
    field: AuditLog.AUDIT_LOG_ACTION,
  })
  action!: string;
  @Column({
    type: DataType.JSON,
    allowNull:false,
    field: AuditLog.AUDIT_LOG_OLD_VALUES,
  })
  oldValues!: object;
  @Column({
    type: DataType.JSON,
    allowNull:false,
    field: AuditLog.AUDIT_LOG_NEW_VALUES,
  })
  newValues!: object;

  @ForeignKey(() => Client)
  @Column({
    type: DataType.INTEGER,
    allowNull:false,
    field: AuditLog.CLIENT_ID,
  })
  clientId!: number;

  @BelongsTo(() => Client)
  client!: Client;
}