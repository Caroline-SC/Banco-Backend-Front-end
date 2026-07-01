import express from 'express'

const app = express()
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.get('/home',(req,res)=>{
    res.send('home')
})

export default app