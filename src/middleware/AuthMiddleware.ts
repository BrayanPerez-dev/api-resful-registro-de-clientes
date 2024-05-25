import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken"

export const auth = (req:Request,res:Response,next:NextFunction):any => {
    if(!req.headers.authorization){
        return res.status(401).send("Token vacio")
    }

    const secretKey:string = process.env.JWT_SECRET_KEY || "my_secret"
    const token:string = req.headers.authorization.split(" ")[1]

    try {
        const cretential: string | object = jwt.verify(token,secretKey)
        if(cretential){
            req.app.locals.credential = cretential;
            return next()
        }
        return res.send("token invalido")
    } catch (error) {
        return res.send(error)
    }
}