import 'dotenv/config'
import app from './app.js'
import sequelize from './database.js'
import { seedDatabase } from '../scripts/seed.js'

const  startServer = async () =>
{
    try{
        app.listen(process.env.PORT, () =>
        console.log(`Access http://localhost:${process.env.PORT}`))
        await sequelize.sync()
        seedDatabase()

    }catch(e){
        console.log(`Error starting server: ${e}`)
        process.exit(1)
    }
}
startServer()