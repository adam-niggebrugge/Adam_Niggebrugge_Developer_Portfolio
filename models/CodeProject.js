const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class CodeProject extends Model {}

CodeProject.init(
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
      describing_title:{
         type: DataTypes.STRING,
         allowNull: false,
     },
      body: {
        type: DataTypes.TEXT,
        allowNull: false,
     },
     site_link: {
        type: DataTypes.STRING,
        allowNull: false,
     },
     git_link: {
        type: DataTypes.STRING,
        allowNull: false,
     },
     image_path: {
        type: DataTypes.STRING,
        allowNull: false,
     },
     alt_image_text: {
        type: DataTypes.STRING,
        allowNull: false,
     },
     is_group_project: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
     },
     valid_from_date: {
         type: DataTypes.DATE,
         allowNull: false,
     },
   }, 
   {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'codeproject',
    }
);

module.exports = CodeProject;
