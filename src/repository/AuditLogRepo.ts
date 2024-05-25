import { AuditLog } from "../model/AuditLog";

interface IAuditLogRepo{
    retrieveAll():Promise<AuditLog[]>
    retrieveByClientId(clintId:number):Promise<AuditLog[]>

}

export class AuditLogRepo implements IAuditLogRepo {
    
    async retrieveAll(): Promise<AuditLog[]> {
        try {
            return await AuditLog.findAll();
          } catch (error) {
            throw new Error("Error al traer todas las aditorias");
          }
    }
   
   async retrieveByClientId(clientId: number): Promise<AuditLog[]> {
        try {
            const auditLogs = AuditLog.findAll({where:{clientId:clientId}})
            if(!auditLogs){
                throw new Error("Auditorias no encontradas");
            }
            return await auditLogs;
          } catch (error) {
            throw new Error("Error al traer todas las aditorias");
          }
    }
}