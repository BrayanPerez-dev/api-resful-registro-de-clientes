import * as dotenv from "dotenv";
import { Sequelize } from "sequelize-typescript";
import { Client } from "../model/Client";
import { User } from "../model/User";
import { AuditLog } from "../model/AuditLog";
import ClientAuditLog from '../hooks/ClientAuditLog.hook';

dotenv.config()
class Database {
    public sequelize:Sequelize | undefined 

    private POSTGRES_DB = process.env.POSTGRES_DB as string;
    private POSTGRES_HOST = process.env.POSTGRES_HOST as string;
    private POSTGRES_PORT = process.env.POSTGRES_PORT as unknown as number;
    private POSTGRES_USER = process.env.POSTGRES_USER as string;
    private POSTGRES_PASSWORD = process.env.POSTGRES_PASSWORD as string;
    
    constructor(){
    this.connectToPostgreSQL();
    }

    private async connectToPostgreSQL(){
        this.sequelize = new Sequelize({
            database:this.POSTGRES_DB,
            username: this.POSTGRES_USER,
            password: this.POSTGRES_PASSWORD,
            host:this.POSTGRES_HOST,
            port:this.POSTGRES_PORT,
            dialect: "postgres",
            models:[Client,User,AuditLog]
        });
        this.sequelize?.authenticate().then(()=> {
            this.hooks();
            console.log("Conexion PostgreSQL ha sido establecida exitosamente")
        }).catch((err)=> {
            console.log("Hubo un error al conectar con la db")
        })
    }

    private hooks(){
        ClientAuditLog.initAfterUpdate()
    }

}

export default Database;