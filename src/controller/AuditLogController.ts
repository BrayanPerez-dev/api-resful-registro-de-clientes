import { Request, Response } from "express";
import { AuditLogRepo } from "../repository/AuditLogRepo";



class AuditLogController {
    async findAll(req:Request,res:Response){
        try {
            const auditLogs = await new AuditLogRepo().retrieveAll()

            res.status(200).json({
                status:'ok!',
                message:'Auditorias traidos exitosamente',
                data:auditLogs,
            })
        } catch (error) {
            res.status(500).json({message:'error de servidor'})
        }
    }
    async findByClientId(req:Request,res:Response){
        try {
            const clientId = parseInt(req.params["clientId"])
            const auditLogs = await new AuditLogRepo().retrieveByClientId(clientId)
            res.status(200).json({
                status:'ok!',
                message:'Auditorias traidas exitosamente',
                data:auditLogs,
            })
        } catch (error) {
            res.status(500).json({message:'error de servidor'})
        }
    }
}

export default new AuditLogController()