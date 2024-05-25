import AuthController from "../controller/AuthController";
import BaseRoutes from "./BaseRouter";


class AuthRoutes extends BaseRoutes {
    routes(): void {
        this.router.post("/login",AuthController.login)
        this.router.post("/registro",AuthController.register)

    }
}

export default new AuthRoutes().router