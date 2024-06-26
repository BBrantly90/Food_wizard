const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Recipes extends Model {
  
}

Recipes.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ingredients: {
        type: DataTypes.STRING(1000),
        allowNull: false,
      },
      instructions: {
        type: DataTypes.STRING(1000),
        allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
  },
},
{
  sequelize,
timestamps: false,
freezeTableName: true,
underscored: true,
modelName: 'recipes',
}
);

module.exports = Recipes;

