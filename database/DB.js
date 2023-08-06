const Sequelize = require('sequelize-cockroachdb')
const dotenv = require('dotenv')

dotenv.config({path:"./config.env"})
const sequelize = new Sequelize(process.env.connectionString, {logging:false})

module.exports = sequelize