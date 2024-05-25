import { Request, Response } from "express";
import { Client } from "../model/Client";
import { ClientRepo } from "../repository/ClientRepo";



class ClientController {
    
     async create(req:Request,res:Response){

        try {
            const newClient = new Client()
            newClient.firstName = req.body.firstName
            newClient.secondName = req.body.secondName
            newClient.firstSurname = req.body.firstSurname
            newClient.secondSurname = req.body.secondSurname
            newClient.firstAdress = req.body.firstAdress
            newClient.secondAdress = req.body.secondAdress
            newClient.dui = req.body.dui
            newClient.nit = req.body.nit
            newClient.userId = req.body.userId
            await new ClientRepo().save(newClient)

            res.status(201).json({
                status: 'ok',
                message:'El cliente fue creado exitosamente'
            })
        } catch (error) {
            res.status(500).json({status:500, message:'error de servidor'})
        }
    }
     async findAll(req:Request,res:Response){
        try {
            const clients = await new ClientRepo().retrieveAll()

            res.status(200).json({
                status:'ok',
                message:'Clientes traidos exitosamente',
                data:clients,
            })
        } catch (error) {
            res.status(500).json({status:500, message:'error de servidor'})
        }
    }
     async update(req:Request,res:Response){
        try {
            const newClient = new Client()
            const id = parseInt(req.params["id"])
            newClient.id = id
            newClient.firstName = req.body.firstName
            newClient.secondName = req.body.secondName
            newClient.firstSurname = req.body.firstSurname
            newClient.secondSurname = req.body.secondSurname
            newClient.firstAdress = req.body.firstAdress
            newClient.secondAdress = req.body.secondAdress
            newClient.dui = req.body.dui
            newClient.nit = req.body.nit
            newClient.userId = req.body.userId
            await new ClientRepo().update(newClient)

            res.status(200).json({
                status:'ok',
                message:'El cliente fue editado exitosamente'
            })
        } catch (error) {
            console.log(error)

            res.status(500).json({status:500, message:'error de servidor'})
        }
    }
}

export default new ClientController()