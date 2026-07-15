import { createAccount } from "../controllers/accountController.js";

import express from'express'

const accountRouter = express.Router()

accountRouter.post('/register',createAccount)

export default accountRouter;