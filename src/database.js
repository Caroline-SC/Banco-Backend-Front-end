import { Sequelize } from "sequelize";
import path from 'path'

const sequelize = new Sequelize({
    dialect:'sqlite',
    storage:'../database.sqlite',
    logging: false
}
)
export default sequelize

