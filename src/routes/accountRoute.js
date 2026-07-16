import { createAccount } from "../controllers/accountController.js";
import { login } from "../controllers/authController.js";

import express from'express'

const accountRouter = express.Router()

accountRouter.post('/register',createAccount)
accountRouter.post('/login',login)

export default accountRouter;