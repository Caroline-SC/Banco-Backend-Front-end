import 'dotenv/config'
import express from 'express'
import accountRouter from './routes/accountRoute.js' 
import session from 'express-session'


const app = express()
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use(
    session({
        secret:process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: false,
        cookie:{
            secure:false,
            httpOnly: true,
            maxAge:1000 * 60 * 24 * 7,
            sameSite: 'lax'
        },
        name: 'project-bank.sid'
    })
)



app.use('/api/account',accountRouter)

app.get('/home',(req,res)=>{
    res.send('home')
})

export default app