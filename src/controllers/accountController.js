import { Account} from "../models/models.js";
import {Op} from 'sequelize'

//CRUD

export const createAccount = async (req, res,next) =>{
    try{
        const {nome_completo,cpf,senha,tipo,email} = req.body;

        const existingAccount = await Account.findOne({
            where:{
                [Op.or]:
                [{email:email},{cpf: cpf}]}})

        if (existingAccount){
            if(existingAccount.email === email){
            const error = new Error('Email already registered')
            error.statusCode = 400
            throw error
            }
            if(existingAccount.cpf === cpf){
            const error = new Error('Cpf already registered')
            error.statusCode = 400
            throw error
            }
        }
        
        const account = await Account.create({
            nome_completo,
            email,
            cpf,
            senha,
            tipo
        })

        res.status(201).json({
            success:true,
            message:'Account created succefuly',
            Account:{
                id: account.id,
                nome:account.nome_completo,
                email:account.email,
                tipo: account.tipo,
                cpf:account.cpf
            }
        })
    }catch(err){
        next(err)     
    }
}

