import { Application, Request, Response } from "express";
import express from "express";
import Database from "./config/database";
import ClientRouter from "./router/ClientRouter";
import AuthRouter from "./router/AuthRouter";
import AuditLogRouter from "./router/AuditLogRouter";
import cors from "cors";

class App {
  public app: Application | undefined;


  constructor() {
    this.app = express();
    this.plugins();
    this.routes();
    this.databaseSync()
  }

  protected plugins():void{
    this.app?.use(cors<Request>())
    this.app?.use(express.json())
    this.app?.use(express.urlencoded({extended:true}))

  }
  protected databaseSync():void{
    const db = new Database();
    db.sequelize?.sync()
  }
  protected routes(): void {

    this.app?.route("/").get((req: Request, res: Response) => {
      res.send("bienvenido");
    });

    this.app?.use('/api/v1/client',ClientRouter)
    this.app?.use('/api/v1/auth',AuthRouter)
    this.app?.use('/api/v1/auditlogs',AuditLogRouter)

  }
}
const port: number = 8000;
const app = new App().app;

app?.listen(port, () => {
  console.log("servidor iniciado exitosamente");
});
