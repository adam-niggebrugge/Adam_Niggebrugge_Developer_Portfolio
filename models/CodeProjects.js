const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Code_Project extends Model {}

Code_Project.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      title:{
          type: DataTypes.STRING,
          allowNull: false,

      },
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'code_project',
    }
);

module.exports = Code_Project;
