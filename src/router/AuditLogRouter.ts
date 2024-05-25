import AuditLogController from "../controller/AuditLogController"
import { auth } from "../middleware/AuthMiddleware"
import BaseRoutes from "./BaseRouter"

class AuditLogRoutes extends BaseRoutes{
    public routes(): void {
      this.router.get('/:clientId',auth,AuditLogController.findByClientId) 
      this.router.get('',auth,AuditLogController.findAll) 

   }
}


export default new AuditLogRoutes().router