const DataType = require('sequelize');
const sequelize = require('../config/sequelize');

const Photo = sequelize.define('Photo', {
    id:{
        type: DataType.NUMBER,
        allowNull: false,
        primaryKey: true

    },
    url:{
        type: DataType.STRING,
        allowNull: false
    },
    label:{
        type: DataType.STRING,
        allowNull: false
    }

})


module.exports = Photo;