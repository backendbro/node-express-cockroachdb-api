
const Sequelize = require('sequelize-cockroachdb')
const sequelize = require('../database/DB.js')

const BookInventory = sequelize.define("BookInventory", {
    id:{
        type:Sequelize.DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    name:{
        type:Sequelize.DataTypes.TEXT,
        allowNull: false,
        unique: true
    },
    author:{
        type:Sequelize.DataTypes.TEXT,
        allowNull: false,
    },
    isbn:{
        type:Sequelize.DataTypes.INTEGER,
        allowNull: false,
        unique: true
    },
    pageCount:{
        type:Sequelize.DataTypes.INTEGER,
        allowNull:false
    }
})

module.exports = BookInventory;