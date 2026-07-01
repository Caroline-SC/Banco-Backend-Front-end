import 'dotenv/config'
import app from './app.js'

const  startServer = async () =>
{
    try{
        app.listen(process.env.PORT, () =>
        console.log(`Access http://localhost:${process.env.PORT}`))
    }catch(e){
        console.log(`Error startin server: ${e}`)
        process.exit(1)
    }
}
startServer()