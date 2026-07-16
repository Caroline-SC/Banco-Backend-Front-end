import session from "express-session";
import { Account } from "../models/models.js";

export const login = async (req, res, next) => {
    try{
      const{cpf ,senha} = req.body

      const account = await Account.findOne({where:{cpf}})

      if(!account){
        const error = new Error('Incorrect login data')
        error.statusCode = 401
        throw error
      }

      const validatePassword = await account.validatePassword(senha)

      if(!validatePassword)   {
              const error = new Error('Incorrect login data');
        error.statusCode = 401;
        throw error;
        }
      req.session.accountId = account.id
      req.session.accountCpf = account.cpf
      req.session.accountName = account.nome_completo
      req.session.isLoggedIn = true

      await new Promise((resolve, reject) => {
      req.session.save((err) => {
        if (err) reject(err);
        else resolve();
      });
    });
     
     res.json({
      sucess: true,
      message: 'Account logged in sucefully',
      account: {
        id: account.id,
        name: account.nome_completo,
        email: account.email,
        type: account.type,
      },
      session:{  
        isLoggedIn: true,
        sessionId: req.sessionID}
    });

      }catch(err){
        next(err)
      }
}