import { z } from "zod";


export const createClientSchema = z.object({
    body: z.object({
        firstName:z.string().min(1,{message:'El primer nombre debe ser mayor que un caracter'}),
        secondName:z.string().min(1,{message:'El segundo nombre debe ser mayor que un caracter'}),
        firstSurname:z.string().min(1,{message:'El primer apellido debe ser mayor que un caracter'}),
        secondSurname:z.string().min(1,{message:'El segundo apellido debe ser mayor que un caracter'}),
        firstAdress:z.string().min(1,{message:'La direccion 1 debe ser mayor que un caracter'}),
        dui:z.string().min(9,{message:'El dui no puede ser menor a 9 caracteres'}).max(9,{message:'El dui no puede ser mayor a 9 caracteres'}),
        nit:z.string().min(9,{message:'El nit no puede ser menor a 9 caracteres'}).max(9,{message:'El nit no puede ser mayor a 9 caracteres'}),
        userId:z.number({message:'Id de usuario requerido'}),
    })
})

export const updateClientSchema = z.object({
    params: z.object({id:z.string()}),
    body: z.object({
        firstName:z.string().min(1,{message:'El primer nombre debe ser mayor que un caracter'}),
        secondName:z.string().min(1,{message:'El segundo nombre debe ser mayor que un caracter'}),
        firstSurname:z.string().min(1,{message:'El primer apellido debe ser mayor que un caracter'}),
        secondtSurname:z.string().min(1,{message:'El segundo apellido debe ser mayor que un caracter'}),
        firstAdress:z.string().min(1,{message:'La direccion 1 debe ser mayor que un caracter'}),
        dui:z.string().min(9,{message:'El dui no puede ser menor a 9 caracteres'}).max(9,{message:'El dui no puede ser mayor a 9 caracteres'}),
        nit:z.string().min(9,{message:'El nit no puede ser menor a 9 caracteres'}).max(9,{message:'El nit no puede ser mayor a 9 caracteres'}),
        userId:z.number({message:'Id de usuario requerido'}),
    }).partial()
})