const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init({

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    body: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
           len: [3]
        }
    },
    user_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, 
{
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'comment'
});

module.exports = Comment;