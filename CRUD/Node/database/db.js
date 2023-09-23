import { Sequelize } from "sequelize";


//Conexión MySql AWS.....
const db = new Sequelize('sample_db', 'admin','Umg#2023',{
    host:'database-2.ccv0i2jejxbn.us-east-1.rds.amazonaws.com',
    dialect:'mysql'
})

//Conexión PHPAdmi...
/*const db = new Sequelize('database_CRUD', 'root','Umg#2023',{
    host:'localhost',
    dialect:'mysql'
})*/

export default db