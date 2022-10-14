const Sequelize = require('sequelize');
require('dotenv').config();


//Connect to DB
const sequelize = new Sequelize(
    process.env.DB_NAME, 
    process.env.DB_USER, 
    process.env.DB_PASS, 
    {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    }
);

sequelize.authenticate()
    .then(() => console.log('Connexion à PostgreSQL réussie par ', process.env.DB_USER))
    .catch((err) => console.log('Connexion à MariaDB échouée ! :', err));


module.exports = sequelize