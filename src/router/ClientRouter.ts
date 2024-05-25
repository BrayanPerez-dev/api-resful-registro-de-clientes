import ClientController from "../controller/ClientController";
import validate from "../helper/validate";
import { auth } from "../middleware/AuthMiddleware";
import { createClientSchema, updateClientSchema } from "../schema/ClientShema";
import BaseRoutes from "./BaseRouter";


class ClientRoutes extends BaseRoutes{
     public routes(): void {
       this.router.post('',auth, validate(createClientSchema),ClientController.create) 
       this.router.patch('/:id',auth,validate(updateClientSchema),ClientController.update) 
       this.router.get('',ClientController.findAll) 
    }
}


export default new ClientRoutes().router