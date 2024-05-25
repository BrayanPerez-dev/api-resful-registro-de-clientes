import { Request, Response } from "express";
import { AuthService } from "../service/Auth";

class AuthController {
  async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      const token = await new AuthService().login(email, password);
      if (token === "") {
        return res.status(400).json({
          status: 400,
          message: "correo o contraseña incorrecta",
        });
      }
      const resToken = { type: "Bearer", data: token };
      return res
        .status(200)
        .json({ status: 'ok', message: "Inicio de sesion exitoso", result: resToken });
    } catch (error) {
      return res.status(500).json({status:500, message: "Error de servidor" });
    }
  }
  async register(req: Request, res: Response) {
    try {
      const { email, password } = req.body;

      await new AuthService().register(
        email,
        password,
      );

      return res.status(200).json({
        message: "Usuario registrado exitosamente",
      });
    } catch (error) {
        return res.status(500).json({ message: "Error de servidor" });
    }
  }
}

export default new AuthController()