import express from 'express'
import accountRouter from './routes/accountRoute.js' 

const app = express()
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use('/api/account',accountRouter)

app.get('/home',(req,res)=>{
    res.send('home')
})

export default app